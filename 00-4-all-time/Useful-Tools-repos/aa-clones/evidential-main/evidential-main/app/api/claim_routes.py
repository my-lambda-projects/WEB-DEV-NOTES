from flask import Blueprint
from flask_login import login_required
from app.models import Claim

claim_routes = Blueprint('claims', __name__)


@claim_routes.route('')
def claims():
    claims = Claim.query.all()

    return {"claims": [claim.full_to_dict() for claim in claims]}


@claim_routes.route('/<int:id>')
def claim(id):
    claim = Claim.query.get(id)

    return claim.full_to_dict()
