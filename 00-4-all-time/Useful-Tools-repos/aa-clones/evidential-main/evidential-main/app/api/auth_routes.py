from flask import Blueprint, request, redirect, url_for
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from app.forms import EditUserForm
from datetime import datetime

auth_routes = Blueprint('auth', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@auth_routes.route('')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.full_to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.full_to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@auth_routes.route('/recheck', methods=['POST'])
@login_required
def recheck():
    """
    Requires logged in route, then uses login form to recheck's user password for verification
    with no need to do anything with user itself if the password checks out
    """
    form = LoginForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # if (form.data['recheck']):
        return {'validated': True}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
@login_required
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User(
            first_name=form.data['firstName'],
            last_name=form.data['lastName'],
            email=form.data['email'],
            password=form.data['password'],
            # deleted defaults to False
            # TODO verified eventually will default to False
            verified=True,
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.full_to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


@auth_routes.route('/edit', methods=['POST'])
@login_required
def edit():
    """
    Edits current user information
    """
    form = EditUserForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = current_user
        first_name=form.data['firstName']
        last_name=form.data['lastName']
        email=form.data['email']
        password=form.data['password']
        if (first_name):
            user.first_name = first_name
        if (last_name):
            user.last_name = last_name
        if (email):
            user.email = email
        if (password):
            user.password = password
        user.updated_at = datetime.now()
        db.session.commit()
        return user.full_to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}

@auth_routes.route('/deactivate')
@login_required
def deactivate():
    """
    Logs a user out then sets flag
    """
    user = current_user
    user.deleted = True
    user.updated_at = datetime.now()
    db.session.commit()
    logout_user()
    return {'message': 'User account deactivated'}

@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
