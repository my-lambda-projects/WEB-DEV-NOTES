from flask import Blueprint
from flask_login import login_required
from app.models import Text

text_routes = Blueprint('texts', __name__)


@text_routes.route('')
def texts():
    texts = Text.query.all()

    return {"texts": [text.full_to_dict() for text in texts]}


@text_routes.route('/<int:id>')
@login_required
def text(id):
    text = Text.query.get(id)
    print("***TEXT***", text.title)

    return text.full_to_dict()
