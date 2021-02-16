CREATE TABLE artists(
id interger NOT NULL,
name varchar(50)
   
);

CREATE TABlE songs(
id interger NOT NULL,
name varchar(1000) NOT NULL,
artist_id integer NOT NULL,
CONSTRAINT artist_fk --fk is forign key
FOREIGN KEY (artist_id)
REFERENCES
)

CREATE TABLE users(
    if integer NOT NULL,
    email varchar(255) NOT NULL
)


CREATE TABLE plays(
id integer NOT NULL,

    
)
