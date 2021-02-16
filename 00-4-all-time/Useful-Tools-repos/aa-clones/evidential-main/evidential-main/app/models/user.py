from datetime import datetime
from .db import db
from sqlalchemy.orm import relationship
from sqlalchemy.ext.hybrid import  hybrid_property
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  first_name = db.Column(db.String(40), nullable = False)
  last_name = db.Column(db.String(40), nullable = False)
  verified = db.Column(db.Boolean, nullable = False, default=False)
  deleted = db.Column(db.Boolean, nullable = False, default=False)
  hashed_password = db.Column(db.String(255), nullable = False)
  created_at = db.Column(db.DateTime, nullable = False, default= datetime.now())
  updated_at = db.Column(db.DateTime, nullable = False, default= datetime.now())

  data_changes = relationship('ChangeHistory', back_populates='user', order_by='desc(ChangeHistory.changed_at)')

  @property
  def site_identifier(self):
    return f"{self.first_name} {self.last_name} (user #{self.id})"

  @hybrid_property
  def texts_added(self):
    from app.models import Text
    texts = Text.query.filter_by(created_by=self.id)
    return texts

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
     return {
      "id": self.id,
      "email": self.email,
      "firstName": self.first_name,
      "lastName": self.last_name,
      "verified": self.verified,
      "deleted": self.deleted,
      "createdAt": self.created_at,
      "updatedAt": self.updated_at,
      "siteIdentifier": self.site_identifier,
    }

  def full_to_dict(self):
    return {
      **self.to_dict(),
      "dataChanges": [update.to_dict() for update in self.data_changes],
      "textsAdded": [text.to_dict() for text in self.texts_added],
    }

  def public_to_dict(self):
    return {
      "id": self.id,
      "firstName": self.first_name,
      "lastName": self.last_name,
      "verified": self.verified,
      "deleted": self.deleted,
      "createdAt": self.created_at,
      "siteIdentifier": self.site_identifier,
    }

  def full_public_to_dict(self):
    return {
      **self.public_to_dict(),
      "dataChanges": [update.to_dict() for update in self.data_changes],
      "textsAdded": [text.to_dict() for text in self.texts_added],
    }
