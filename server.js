const express = require('express')
const app = express()
const port = 3000
const customers = require('./customers.json')

//Middleware pour recuperer le post
app.use(express.json())

//ACCUEIL
app.get('/', (req, res) => {
	res.send('<h1>Liste de clients</h1>')
})

//ALL CLIENT
app.get('/api/client', (req, res) => {
  res.status(200).json(customers)
})

//CLIENT PAR ID
app.get('/api/client/:id', (req, res) => {
  //res.status(200).send(typeof())
	//console.log(typeof (req.params.id));
	const id = parseInt(req.params.id)
	//console.log(typeof(id));
  const customer = customers.find((customer) => customer.id === id)
  res.status(200).json(customer)
})


//AJOUTER UN CLIENT
app.post('/api/client', (req, res) => {
	customers.push(req.body)
  res.status(200).json(customers)
	console.log(req.body);
})


//DELETE UN CLIENT
app.delete('/api/client/:id', (req,res) => {
	const id = parseInt(req.params.id)
  let customer = customers.find(customer => customer.id === id)
  customers.splice(customers.indexOf(customer),1)
  res.status(200).json(customers)
})

//MODIFICATION D'UN CLIENT
app.put('/api/client/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let customer = customers.find(customer => customer.id === id)
    customer.id =req.body.id,
    customer.email =req.body.email,
    customer.first = req.body.first,
    customer.last =req.body.last,
    customer.company =req.body.company,
    customer.created_at =req.body.created_at,
    customer.country =req.body.country,
    res.status(200).json(customer)
})

//SERVEUR
app.listen(port, () => {
  console.log(`le serveur tourne au port ${port}`)
})

