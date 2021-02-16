from app.models import db, Claim, HitKey, Argument, Hit, Rating
from datetime import datetime

def seed_change_histories():

    claim = Claim.query.get(3)
    claim.update_data(2, {"assertion": "Ian Bentley is the best programmer", "notes": "A totally accurate claim"})

    hit_key = HitKey.query.get(3)
    hit_key.update_data(1, {"key": "salvation"})

    argument = Argument.query.get(5)
    argument.update_data(1, {"statement": 'Ian knows the answers to all of my questions'})

    db.session.commit()

def seed_change_histories_again():

    hit = Hit.query.get(5)
    hit.update_data(1, {"ignore": True})

    rating_1 = Rating.query.get(1)
    rating_2 = Rating.query.get(2)
    rating_1.update_data(1, {"rating": 70})
    rating_2.update_data(1, {"rating": 0})

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the Change_histories table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_all_change_histories():
    db.session.execute('TRUNCATE change_histories_again;')
    db.session.execute('DROP TYPE tracked_tables;')
    db.session.commit()
