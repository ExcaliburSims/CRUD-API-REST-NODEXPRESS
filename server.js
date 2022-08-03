const express = require('express')
const app = express()
const port = 3000

app.get('/api/client', (req, res) => {
  res.send('Salut le monde!')
})

app.listen(port, () => {
  console.log(`le serveur tourne au port ${port}`)
})

