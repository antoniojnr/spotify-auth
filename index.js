const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/callback', (req, res) => {
  res.send('Params: ' + JSON.stringify(req.query))
})

app.listen(PORT, () => console.log('Example app listening on port: ' + PORT))
