from app.models import db, HitKey

def seed_hit_keys():

    hit_keys = [
        HitKey(
            key="test",
            created_by=1
            ),
        HitKey(
            key="claim",
            created_by=1
            ),
        HitKey(
            key="slvation", #Correcting to "salvation" in seed run
            created_by=2
            ),
        HitKey(
            key="faith",
            created_by=2
            ),
    ]

    db.session.bulk_save_objects(hit_keys)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the hit_keys table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_hit_keys():
    db.session.execute('TRUNCATE hit_keys;')
    db.session.commit()
