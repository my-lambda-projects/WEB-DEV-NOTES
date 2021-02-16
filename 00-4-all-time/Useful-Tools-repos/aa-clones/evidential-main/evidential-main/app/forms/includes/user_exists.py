from app.models import User
from wtforms.validators import ValidationError

def user_exists(form, field):
    print("Checking if user exits", field.data)
    form_type = form.data['formType']
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user and user.deleted:
        raise ValidationError("Account for that email was deactivated.")
    if user and not form_type == "login":
        raise ValidationError("Cannot use that email, a user with this email is already registered.")
