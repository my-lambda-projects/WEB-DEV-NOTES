from functools import reduce
from .db import db
from sqlalchemy.orm import relationship
from sqlalchemy.orm.session import object_session
from .mixins.track_updates import TrackUpdates
from .mixins.common_columns import CommonColumns

class Hit(db.Model, CommonColumns, TrackUpdates):
  __tablename__ = 'hits'

  text_id = db.Column(db.ForeignKey('texts.id'), nullable = False)
  key_id = db.Column(db.ForeignKey('hit_keys.id'))
  claim_id = db.Column(db.ForeignKey('claims.id'), nullable = False)
  location = db.Column(db.Integer, nullable = False)
  word_count = db.Column(db.Integer, nullable = False)
  custom_key = db.Column(db.String(500), default='')
  grouped_id = db.Column(db.ForeignKey('hits.id'), default=None)
  ignore = db.Column(db.Boolean, nullable = False, default = False)

  # grouped_parent = relationship('Hit', remote_side=[id])
  grouped_children = relationship('Hit')
  text = relationship('Text', back_populates='hits')
  hit_key = relationship('HitKey', back_populates='hits')
  claim = relationship('Claim', back_populates='hits')
  ratings = relationship('Rating', back_populates='hit', order_by='Rating.id')

  def group_to_parent(self, parent_id):
    if (parent_id != self.id):
      self.grouped_id = parent_id
      return {"success": "Grouped"}
    else:
      return {"error": "Hit cannot group with itself."}

  def add_child_to_group(self, child_id):
    if (child_id != self.id):
      child = object_session(self).get(child_id)
      child.grouped_id = self.id
      return {"success": "Grouped"}
    else:
      return {"error": "Hit cannot group with itself."}

  def get_grouped_word_count(self):
    child_counts = [child.get_grouped_word_count() for child in self.grouped_children]
    return reduce(lambda sum, cnt: sum + cnt, child_counts, self.word_count)

  def get_group_info(self):
    return {
      "wordCount": self.get_grouped_word_count(),
      "size": len(self.grouped_children) + 1,
      "children": [child.to_dict() for child in self.grouped_children],
    }

  # for to_history() keys are for python, and must match attribute key names of the model, so snake-case
  def to_history(self):
    return {
      "text_id": self.text_id,
      "key_id": self.key_id,
      "claim_id": self.claim_id,
      "location": self.location,
      "word_count": self.word_count,
      "custom_key": self.custom_key,
      "grouped_id": self.grouped_id,
    }

  # to_dict functions are for javascript, so camel-case keys
  def to_dict(self):
    return {
      "id": self.id,
      "textId": self.text_id,
      "keyId": self.key_id,
      "claimId": self.claim_id,
      "location": self.location,
      "wordCount": self.word_count,
      "customKey": self.custom_key,
      "groupedId": self.grouped_id,
      "createdBy": self.created_by,
      "createdAt": self.created_at,
    }

  def full_to_dict(self):
    return {
      "id": self.id,
      "textId": self.text_id,
      "keyId": self.key_id,
      "claimId": self.claim_id,
      "location": self.location,
      "wordCount": self.word_count,
      "customKey": self.custom_key,
      "groupedId": self.grouped_id,
      "createdBy": self.created_by,
      "createdAt": self.created_at,
      "group": self.get_group_info()
    }
