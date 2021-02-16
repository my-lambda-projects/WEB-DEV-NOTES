from .db import db
from sqlalchemy.orm import relationship
from .mixins.common_columns import CommonColumns

class Text(db.Model, CommonColumns):
  __tablename__ = 'texts'

  title = db.Column(db.String(200), nullable = False)
  content = db.Column(db.Text, nullable = False)
  word_count = db.Column(db.Integer, nullable = False)
  source = db.Column(db.String(500))
  locked = db.Column(db.Boolean, nullable = False, default=False)
  locked_at = db.Column(db.DateTime)

  hits = relationship('Hit', back_populates='text', order_by='Hit.location')

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "content": self.content,
      "wordCount": self.word_count,
      "source": self.source,
      "locked": self.locked,
      "lockedAt": self.locked_at,
      "createdBy": self.created_by,
      "createdAt": self.created_at,
    }

  def full_to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "content": self.content,
      "wordCount": self.word_count,
      "source": self.source,
      "locked": self.locked,
      "lockedAt": self.locked_at,
      "createdBy": self.created_by,
      "createdAt": self.created_at,
      "hits": [hit.to_dict() for hit in self.hits]
    }
