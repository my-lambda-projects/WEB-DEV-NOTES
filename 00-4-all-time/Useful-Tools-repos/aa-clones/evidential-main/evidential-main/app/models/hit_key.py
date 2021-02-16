from typing import Set
from .db import db
from sqlalchemy.orm import relationship
from .claim_hit_keys import ClaimHitKeys
from .mixins.track_updates import TrackUpdates
from .mixins.common_columns import CommonColumns

class HitKey(db.Model, CommonColumns, TrackUpdates):
  __tablename__ = 'hit_keys'

  key = db.Column(db.String(30), nullable = False, unique=True)

  # TODO take out if not needed
  # claims = relationship(
  #   'Claim',
  #   secondary=ClaimHitKeys, back_populates='hit_keys',
  #   order_by='Claim.assertion'
  #   )

  claims = relationship(
    'ClaimHitKeys',
    back_populates='hit_key')#,
    # order_by='ClaimHitKeys.claim.assertion',
    # )

  hits = relationship('Hit', back_populates='hit_key') #, order_by='Hit.text_id')

  # for to_history() keys are for python, and must match attribute key names of the model, so snake-case
  def to_history(self):
    return {
      "key": self.key,
    }

  # to_dict functions are for javascript, so camel-case keys
  def to_dict(self):
    return {
      "id": self.id,
      "key": self.key,
      "createdBy": self.created_by,
      "createdAt": self.created_at,
    }

  def full_to_dict(self):
    return {
      "id": self.id,
      "key": self.key,
      "createdBy": self.created_by,
      "createdAt": self.created_at,
      "usedBy": [claim.to_dict() for claim in self.claims],
      "foundIn": [hit.to_dict() for hit in self.hits]
    }
