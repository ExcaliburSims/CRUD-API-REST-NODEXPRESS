const express = require('express')
const app = express()
const port = 3000
const customers= require('./customers.json')

//ACCUEIL
app.get('/', (req, res) => {
	res.send('<h1>Liste de clients</h1>')
})

//ALL CLIENT
app.get('/api/client', (req, res) => {
  res.status(200).json(customers)
})


//SERVEUR
app.listen(port, () => {
  console.log(`le serveur tourne au port ${port}`)
})

