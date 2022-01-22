const Abhi = require('./second');

const express = require('express')
const app = express()


const port = 3000

app.get('/', (req, res) => {
  // res.send('Hello w!')
  res.json({name:abhi})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})