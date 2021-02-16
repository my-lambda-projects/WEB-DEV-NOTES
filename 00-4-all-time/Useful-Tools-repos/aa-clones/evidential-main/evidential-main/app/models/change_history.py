import json
from .db import db
from sqlalchemy.orm import relationship

class ChangeHistory(db.Model):
  __tablename__ = 'change_histories'

  id = db.Column(db.Integer, primary_key = True)
  updated_by = db.Column(db.ForeignKey('users.id'), nullable = False)
  changed_at = db.Column(db.DateTime, nullable = False)
  table_name = db.Column(db.Enum(
    'CLAIMS', 'HITS', 'RATINGS', 'HIT_KEYS', 'SUPPORT_REBUTS', 'ARGUMENTS',
    name='tracked_tables'
  ), nullable = False)
  table_pk = db.Column(db.Integer, nullable=False)
  old_data = db.Column(db.JSON, nullable=False)
  new_data = db.Column(db.JSON, nullable=False)

  user = relationship('User', back_populates='data_changes')

  def to_dict(self):
    return {
      "id": self.id,
      "updatedBy": self.updated_by,
      "changedAt": self.changed_at,
      "table": self.table_name,
      "tablePK": self.table_pk,
      "oldData": json.loads(self.old_data),
      "newData": json.loads(self.new_data),
    }
