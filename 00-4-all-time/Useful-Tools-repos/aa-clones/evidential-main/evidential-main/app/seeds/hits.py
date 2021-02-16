from app.models import db, Hit, Text

def seed_hits():

    text_1 = Text.query.get(1).content
    text_2 = Text.query.get(2).content
    loc_1 = text_2.index('salvation')
    loc_2 = text_2.index('faith')
    loc_3 = text_2.index('faith', loc_2+1)

    hits = [
        Hit(
            text_id=1,
            key_id=1,
            claim_id=1,
            location=text_1.index('test'),
            word_count=1,
            created_by=1,
            ),
        Hit(
            text_id=2,
            key_id=3,
            claim_id=2,
            location=loc_1,
            word_count=1,
            created_by=1,
            ),
        Hit(
            text_id=2,
            key_id=3,
            claim_id=2,
            location=text_2.index('salvation', loc_1+1),
            word_count=1,
            created_by=1,
            ),
        Hit(
            text_id=2,
            key_id=4,
            claim_id=2,
            location=loc_2,
            word_count=1,
            created_by=1,
            ),
        Hit(
            text_id=2,
            key_id=4,
            claim_id=2,
            location=loc_3,
            word_count=1,
            created_by=1,
            ),
        Hit(
            text_id=2,
            key_id=4,
            claim_id=2,
            location=text_2.index('faith', loc_3+1),
            word_count=1,
            created_by=1,
            ),
    ]

    db.session.bulk_save_objects(hits)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the hits table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_hits():
    db.session.execute('TRUNCATE hits;')
    db.session.commit()
