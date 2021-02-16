from flask import Blueprint
from flask_login import login_required, current_user
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('')
def users():
    users = User.query.all()

    return {"users": [user.full_public_to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    self = current_user
    user = User.query.get(id)

    return user.full_to_dict() if id == self.id else user.full_public_to_dict()
