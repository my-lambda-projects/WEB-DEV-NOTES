from ..db import db
from datetime import datetime
# from sqlalchemy.ext.hybrid import hybrid_property


class CommonColumns(object):
    id = db.Column(db.Integer, primary_key = True, autoincrement=True)
    created_at = db.Column(db.DateTime, nullable = False, default=datetime.now())
    _created_by = db.Column('created_by', db.Integer)

    @property
    def created_by(self):
        from app.models import User
        creator = User.query.get(self._created_by)
        return creator.public_to_dict()

    @created_by.setter
    def created_by(self, user_id):
        setattr(self, '_created_by', user_id)
