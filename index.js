const express = require('express')
const League = require('./league/model')

const app = express()

const port = process.env.PORT || 3000

function onListen () {
  console.log(`Listening on :${port}`)
  // console.log('Listening on :' + port)
}

app.listen(port, onListen)
