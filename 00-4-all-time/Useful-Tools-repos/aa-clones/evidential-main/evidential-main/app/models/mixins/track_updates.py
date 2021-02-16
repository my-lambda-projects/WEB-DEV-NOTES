import json
from ..db import db
from ..change_history import ChangeHistory
from sqlalchemy.ext.hybrid import hybrid_property
from datetime import datetime

class TrackUpdates(object):

  @hybrid_property
  def last_updated(self):
    table = self.__tablename__.upper()
    last = ChangeHistory.query.filter_by(table_name=table, table_pk=self.id).order_by(ChangeHistory.changed_at.desc()).first()

    return last.to_dict()['changed_at']

  @hybrid_property
  def MODIFIABLE(self):
    return self.to_history().keys()

  def update_data(self, user_id, change_data):
    old_data = json.dumps(self.to_history())
    revised_obj = self.__update_data__(change_data)
    new_data = json.dumps(revised_obj.to_history())
    history = ChangeHistory(
        updated_by= user_id,
        changed_at= datetime.now(),
        table_name= self.__tablename__.upper(),
        table_pk= self.id,
        old_data= old_data,
        new_data= new_data
        )
    db.session.add(history)

    return revised_obj

  def __update_data__(self, data):
    for key in data:
      if key in self.MODIFIABLE:
        setattr(self, key, data[key])
    db.session.add(self)
    return self

  def get_history(self):
    table = self.__tablename__.upper()
    history = ChangeHistory.query.filter_by(table_name=table, table_pk=self.id).order_by(ChangeHistory.changed_at.desc())

    return [item.to_dict() for item in history]
