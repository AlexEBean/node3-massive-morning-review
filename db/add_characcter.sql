INSERT INTO characters
(name, image)
VALUES
(${name}, ${image})
-- ($1, $2);
-- Also works, but you'd have to remember that means the values are put into an array
RETURNING *;