from .db import db
from sqlalchemy.orm import relationship
from sqlalchemy.ext.hybrid import hybrid_property
from .mixins.track_updates import TrackUpdates
from .mixins.common_columns import CommonColumns

class Rating(db.Model, CommonColumns, TrackUpdates):
  __tablename__ = 'ratings'

  hit_id = db.Column(db.ForeignKey('hits.id'))
  support_rebut_id = db.Column(db.ForeignKey('supports_rebuts.id'))
  argument_id = db.Column(db.ForeignKey('arguments.id'))
  _rating = db.Column('rating', db.Integer)

  @hybrid_property
  def rating(self):
    return self._rating

  @rating.setter
  def rating(self, value):
    if (value > 100):
      self._rating = 100
    elif (value < -100):
      self._rating = -100
    else:
      self._rating = value

  hit = relationship('Hit', back_populates='ratings')
  argument = relationship('Argument', back_populates='ratings')
  supports = relationship('SupportRebut', back_populates='ratings')

  # for to_history() keys are for python, and must match attribute key names of the model, so snake-case
  def to_history(self):
    return {
      "hit_id": self.hit_id,
      "support_rebut_id": self.support_rebut_id,
      "argument_id": self.argument_id,
      "rating": self.rating
    }

  def to_dict(self):
    return {
      "id": self.id,
      "hit_id": self.hit_id,
      "support_rebut_id": self.support_rebut_id,
      "argument_id": self.argument_id,
      "rating": self.rating,
      "createdBy": self.created_by,
      "createdAt": self.created_at,
    }

  def full_to_dict(self):
    return {
      "id": self.id,
      "hit_id": self.hit_id,
      "support_rebut_id": self.support_rebut_id,
      "argument_id": self.argument_id,
      "rating": self.rating,
      "createdBy": self.created_by,
      "createdAt": self.created_at,
      "hit": self.hit.to_dict(),
      "argument": self.argument.to_dict(),
      "supports": self.supports.to_dict()
    }
