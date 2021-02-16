from .db import db
from sqlalchemy.orm import relationship
from sqlalchemy.orm.session import object_session
from .mixins.track_updates import TrackUpdates
from .mixins.common_columns import CommonColumns

class SupportRebut(db.Model, CommonColumns, TrackUpdates):
  __tablename__ = 'supports_rebuts'

  claim_id = db.Column(db.ForeignKey('claims.id'), primary_key=True, autoincrement=False, nullable=False)
  argument_id = db.Column(db.ForeignKey('arguments.id'), primary_key=True, autoincrement=False, nullable=False)

  # NOTE: A rebut is indicated by setting "supports" to False
  supports = db.Column(db.Boolean(), nullable = False)

  argument = relationship('Argument', back_populates='claim_relations', order_by='Argument.statement')
  claim = relationship('Claim', back_populates='argument_relations', order_by='Claim.assertion')
  ratings = relationship('Rating', back_populates='supports', order_by='Rating.hit_id')

  def get_claim(self):
    return self.claim.to_dict()

  def get_argument(self):
    return self.argument.to_dict()

  # for to_history() keys are for python, and must match attribute key names of the model, so snake-case
  def to_history(self):
    return {
      "claim_id": self.claim_id,
      "argument_id": self.argument_id,
      "supports": self.supports,
    }

  # to_dict functions are for javascript, so camel-case keys
  def to_dict(self):
    return {
      "id": self.id,
      "claimId": self.claim_id,
      "argumentId": self.argument_id,
      "supports": self.supports,
      "createdBy": self.created_by,
      "createdAt": self.created_at,
    }

  def full_to_dict(self):
    return {
      "id": self.id,
      "claimId": self.claim_id,
      "argumentId": self.argument_id,
      "supports": self.supports,
      "createdBy": self.created_by,
      "createdAt": self.created_at,
      "claimArgument": self.get_argument(),
      "argumentClaim": self.get_claim(),
    }
