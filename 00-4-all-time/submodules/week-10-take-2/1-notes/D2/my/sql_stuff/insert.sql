-- SEED DATA!

-- insert user data
INSERT INTO users (username, email, state_abbr)
VALUES 
('joe', 'joe@joe.com', 'NJ'),
('jesse', 'jesse@jesse.com', 'CA'),
('mitchell', 'mitchell@mitchell.com', 'CA'),
('jm', 'jm@jm.com', 'NC');


-- insert post data
INSERT INTO posts (body, user_id)
VALUES 
('first post', 1),
('sql is cool!', 2),
('my dog is awesome', 1);



-- insert like data
INSERT INTO likes (user_id, post_id)
VALUES 
(1, 1),
(2, 1),
(1,3),
(2,3),
(3,3),
(4,3);
