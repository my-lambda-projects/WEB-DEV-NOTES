from app.models import db, ClaimHitKeys


def seed_claim_hit_keys():

    claim_hit_keys = [
      ClaimHitKeys(
        claim_id= 1,
        key_id= 1,
        created_by= 1,
      ),
      ClaimHitKeys(
        claim_id= 1,
        key_id= 2,
        created_by= 1,
      ),
      ClaimHitKeys(
        claim_id= 2,
        key_id= 3,
        created_by= 2,
      ),
      ClaimHitKeys(
        claim_id= 2,
        key_id= 4,
        created_by= 2,
      ),
    ]

    db.session.bulk_save_objects(claim_hit_keys)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the claim_hit_keys table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_claim_hit_keys():
    db.session.execute('TRUNCATE seed_claim_hit_keys;')
    db.session.commit()
