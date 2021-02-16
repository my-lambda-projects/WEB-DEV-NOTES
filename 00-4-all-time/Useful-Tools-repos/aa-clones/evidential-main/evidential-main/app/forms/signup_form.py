from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, EqualTo, Length, Regexp
from .includes.user_exists import user_exists

class SignUpForm(FlaskForm):
    formType = StringField('formType', default='sign up'),
    firstName = StringField('firstName', validators=[DataRequired()])
    lastName = StringField('lastName', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), Email(), user_exists])
    confirmPassword = StringField('confirmPassword')
    password = StringField('password', validators=[
        DataRequired(),
        Length(min=8, message='Password must be 8 or more characters'), EqualTo('confirmPassword', message='Confirmed password must match password'),
        Regexp(r"(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*", message='Password must contain 1 lower & 1 upper case letter, 1 number, and 1 special character of @$!%*?&')
        ])
