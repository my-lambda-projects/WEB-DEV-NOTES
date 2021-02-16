from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired
from .includes.user_exists import user_exists
from .includes.password_matches import password_matches


class LoginForm(FlaskForm):
    formType = StringField('formType', default='login')
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[
        DataRequired(),
        password_matches
        ])
    recheck = BooleanField('recheck')
