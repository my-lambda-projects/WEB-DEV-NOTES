-- select all users
-- SELECT username, email
-- FROM users;

-- select users with usernames that start with a 'j'
SELECT *
FROM users
WHERE UPPER(username) LIKE 'J%';

-- select users that live in certain states
-- SELECT *
-- FROM users
-- WHERE state_abbr IN ('CA', 'NC');
