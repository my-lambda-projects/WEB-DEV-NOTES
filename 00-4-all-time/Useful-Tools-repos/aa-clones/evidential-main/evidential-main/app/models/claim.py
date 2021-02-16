from .db import db
from sqlalchemy.orm import relationship
from .claim_hit_keys import ClaimHitKeys
from .mixins.track_updates import TrackUpdates
from .mixins.common_columns import CommonColumns

class Claim(db.Model, CommonColumns, TrackUpdates):
  __tablename__ = 'claims'

  assertion = db.Column(db.String(200), nullable = False, unique=True)
  notes = db.Column(db.Text)

  hit_keys = relationship('ClaimHitKeys',back_populates='claim')

  argument_relations = relationship('SupportRebut', back_populates='claim')
  hits = relationship('Hit', back_populates='claim', order_by='Hit.text_id')

  # for to_history() keys are for python, and must match attribute key names of the model, so snake-case
  def to_history(self):
    return {
      "assertion": self.assertion,
      "notes": self.notes,
    }

  # to_dict functions are for javascript, so camel-case keys
  def to_dict(self):
    return {
      "id": self.id,
      "assertion": self.assertion,
      "notes": self.notes,
      "createdBy": self.created_by,
      "createdAt": self.created_at,
    }

  def full_to_dict(self):
    return {
      "id": self.id,
      "assertion": self.assertion,
      "notes": self.notes,
      "createdBy": self.created_by,
      "createdAt": self.created_at,
      "hitKeys": [key.to_dict() for key in self.hit_keys],
      "supportingArguments": [relation.get_argument() for relation in self.argument_relations if relation.supports == True],
      "rebutingArguments": [relation.get_argument() for relation in self.argument_relations if relation.supports == False],
    }
