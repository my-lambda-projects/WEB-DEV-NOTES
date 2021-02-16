-- select all users that have liked a specific post
SELECT *
FROM users
JOIN likes on likes.user_id = users.id
JOIN posts on likes.post_id = posts.id;


