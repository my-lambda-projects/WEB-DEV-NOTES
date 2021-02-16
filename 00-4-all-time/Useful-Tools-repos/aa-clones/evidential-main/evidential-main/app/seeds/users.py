from werkzeug.security import generate_password_hash
from app.models import db, User
from datetime import datetime

def seed_users():

    users = [
        User(
            first_name='Demo',
            last_name='Persona',
            email='demo@demo.demo',
            verified=True,
            password='hj8n%9Gw',
            created_at=datetime.now(),
            updated_at=datetime.now(),
            ),
        User(
            first_name='Scott',
            last_name='Smith',
            email='scott@scott.com',
            verified=True,
            password='ss2DevT$',
            created_at=datetime.now(),
            updated_at=datetime.now(),
        ),
        User(
            first_name='Deleted',
            last_name='User',
            email='deleted@deleted.com',
            verified=True,
            deleted=True,
            password='delTE$T0',
            created_at=datetime.now(),
            updated_at=datetime.now(),
        ),
        User(
            first_name='Ian',
            last_name='B',
            email='ian@ian.io',
            verified=True,
            password='ianPA$S9',
            created_at=datetime.now(),
            updated_at=datetime.now(),
        ),
    ]

    db.session.bulk_save_objects(users)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
