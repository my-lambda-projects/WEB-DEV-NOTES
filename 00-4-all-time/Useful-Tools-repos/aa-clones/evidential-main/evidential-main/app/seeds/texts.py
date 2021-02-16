from app.models import db, Text
from datetime import datetime
import requests

def seed_texts():

    c1 = 'Just a few words of content to work with. For me, before my first test at a/A, I could not breath!'
    c1wc = len(c1.split())

    c2source = 'https://www.gutenberg.org/files/45001/45001-h/45001-h.html'
    c2file = requests.get(c2source)
    c2 = c2file.text
    c2wc = len(c2.split())

    c3 = 'A second short test of a text that has not been locked'
    c3wc = len(c3.split())

    texts = [
        Text(
            title='Test title 1',
            content=c1,
            word_count=c1wc,
            source="test/1/no/real/url.html",
            locked=True,
            locked_at=datetime.now(),
            created_by=1,
            created_at=datetime.today(),
            ),
        Text(
            title='Institutes of the Christian Religion, Vol. 1',
            content=c2,
            word_count=c2wc,
            source=c2source,
            locked=True,
            locked_at=datetime.now(),
            created_by=2,
            created_at=datetime.today()
            ),
        Text(
            title='Unlocked Text Test',
            content=c3,
            word_count=c3wc,
            source="file upload",
            locked=False,
            locked_at= None,
            created_by=2,
            created_at=datetime.now()
            ),
    ]

    db.session.bulk_save_objects(texts)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the texts table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_texts():
    db.session.execute('TRUNCATE texts;')
    db.session.commit()
