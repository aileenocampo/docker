const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;
const knex = require('knex')(require('./knexfile.js')['development']);
var cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/:id', function userIdHandler (req, res) {
  userInput = req.params.id
  console.log("this is the backend", req.params.id)
  knex('user_input')
  .insert({input: userInput})
  .then(() => {
    knex.select().table('user_input')
    .then(databaseData => {
      console.log("this is the database data", databaseData)
      res.status(200).json(databaseData)
    })
    .catch(err => res.status(401).send("There was an error"))
  })
  .catch(err =>
    res.status(404).json({
      message:
        'The data was not added to the database'
    })
  );
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})