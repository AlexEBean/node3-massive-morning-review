
module.exports = {
    getAllCharacters: (req, res) => {
        const db = req.app.get('db')
        db.get_all_characters()
            .then(characters => {
                res.status(200).send(characters)
            })
            .catch((err) => res.status(500).send(err))
    },
    getCharacter: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.get_character(+id)
            .then(character => 
                res.status(200).send(character)
            )
            .catch((err) => res.status(500).send(err))
    },
    addCharacter: (req, res) => {
        const db = req.app.get('db')
        // const newCharacter = {...req.body}
        // db.add_character(newCharacter)
        const {name, image}
        db.add_character({ name, image})
            .then(newCharacter => 
                res.status(200).send(newCharacter)
            )
            .catch((err) => res.status(500).send(err))
    },
    editCharacter: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {name, image} = req.body
        db.edit_character([+id, name, image])
            .then(updatedCharacter => 
                res.status(200).send(updatedCharacter)
            )
            .catch((err) => res.status(500).send(err))
    },
    deleteCharacter: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_character(+id)
            .then(() => 
                res.status(200).send(characters)
            )
            .catch((err) => res.status(500).send(err))
    }
}
