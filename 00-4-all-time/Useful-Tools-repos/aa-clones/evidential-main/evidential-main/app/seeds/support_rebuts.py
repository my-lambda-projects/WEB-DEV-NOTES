from app.models import db, SupportRebut

def seed_supports_rebuts():

    supports_rebuts = [
        SupportRebut(
            claim_id = 1,
            argument_id = 1,
            supports = True,
            created_by=1
            ),
        SupportRebut(
            claim_id = 1,
            argument_id = 2,
            supports = False,
            created_by=1
            ),
        SupportRebut(
            claim_id = 2,
            argument_id = 3,
            supports = True,
            created_by=2
            ),
        SupportRebut(
            claim_id = 2,
            argument_id = 4,
            supports = False,
            created_by=2
            ),
        SupportRebut(
            claim_id = 3,
            argument_id = 5,
            supports = True,
            created_by=2
            ),
        SupportRebut(
            claim_id = 3,
            argument_id = 6,
            supports = False,
            created_by=2
            ),
    ]

    db.session.bulk_save_objects(supports_rebuts)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the supports_rebuts table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_supports_rebuts():
    db.session.execute('TRUNCATE supports_rebuts;')
    db.session.commit()
