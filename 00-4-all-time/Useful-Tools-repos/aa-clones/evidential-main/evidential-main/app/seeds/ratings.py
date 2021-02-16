from app.models import db, Rating

def seed_ratings():

    ratings = [
        Rating(
            hit_id=1,
            support_rebut_id=1,
            argument_id=1,
            rating=50,
            created_by=1
            ),
        Rating(
            hit_id=1,
            support_rebut_id=2,
            argument_id=2,
            rating=-10,
            created_by=1
            ),
    ]

    db.session.bulk_save_objects(ratings)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the ratings table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_ratings():
    db.session.execute('TRUNCATE ratings;')
    db.session.commit()
