from app.models import db, Argument

def seed_arguments():

    arguments = [
        Argument(
            statement='A test makes one an emotional basket case',
            notes='',
            created_by=1
            ),
        Argument(
            statement="A test sharpens one's mind",
            notes='',
            created_by=1
            ),
        Argument(
            statement='The Bible clearly asserts salvation is by faith alone',
            notes="While this does not prove salvation is by faith, it estabilishes the Bible's position on the matter",
            created_by=2
            ),
        Argument(
            statement="The Bible affirms that it is faith plus works that is key to salvation",
            notes='',
            created_by=2
            ),
        Argument(
            statement='Ian knows the answers to most of my questions', # Update to "all" in seeder
            notes="",
            created_by=2
            ),
        Argument(
            statement="Bill Gates is a better programmer",
            notes='',
            created_by=2
            ),
    ]

    db.session.bulk_save_objects(arguments)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the arguments table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_arguments():
    db.session.execute('TRUNCATE arguments;')
    db.session.commit()
