from .db import db
from sqlalchemy.orm import relationship
from .mixins.track_updates import TrackUpdates
from .mixins.common_columns import CommonColumns

class Argument(db.Model, CommonColumns, TrackUpdates):
  __tablename__ = 'arguments'

  statement = db.Column(db.String(250), nullable = False, unique=True)
  notes = db.Column(db.Text)

  claim_relations = relationship('SupportRebut', back_populates='argument', order_by='SupportRebut.id')
  ratings = relationship('Rating', back_populates='argument', order_by='Rating.hit_id')

  # for to_history() keys are for python, and must match attribute key names of the model, so snake-case
  def to_history(self):
    return {
      "statement": self.statement,
      "notes": self.notes,
    }

  # to_dict functions are for javascript, so camel-case keys
  def to_dict(self):
    return {
      "id": self.id,
      "statement": self.statement,
      "notes": self.notes,
      "createdBy": self.created_by,
      "createdAt": self.created_at,
    }

  def full_to_dict(self):
    return {
      "id": self.id,
      "statement": self.statement,
      "notes": self.notes,
      "createdBy": self.created_by,
      "createdAt": self.created_at,
      "supports": [relation.get_claim() for relation in self.claim_relations if relation.supports == True],
      "rebuts": [relation.get_claim() for relation in self.claim_relations if relation.supports == False]
    }
