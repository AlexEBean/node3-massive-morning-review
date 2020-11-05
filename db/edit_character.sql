-- takes 3 characters in an array: id, name, image

UPDATE characters
SET name = $2,
    image = $3
WHERE id = $1
RETURNING *;