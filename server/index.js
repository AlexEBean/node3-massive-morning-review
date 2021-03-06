require("dotenv").config()
const express = require("express")
const cors = require("cors")
const massive = require("massive")
const cc = require("./controllers/characterController")
const {SERVER_PORT, CONNECTION_STRING} = process.env


const app = express()

app.use(cors())
app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    // Quotation bit needs to be called the same as the folder db
    console.log('db is connected')
}).catch((err) => console.log(err))

app.get('/api/characters', cc.getAllCharacters)
app.get('/api/character/:id', cc.getCharacter)
app.post('/api/characters', cc.addCharacter)
app.put('/api/characters/:id', cc.editCharacter)
app.delete('/api/characters/:id', cc.deleteCharacter)

app.listen(SERVER_PORT, () => console.log(`Server listening on Port:${SERVER_PORT}`))