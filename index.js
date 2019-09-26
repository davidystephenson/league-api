const express = require('express')
const leagueRouter = require('./league/router')
const teamRouter = require('./team/router')
const bodyParser = require('body-parser')

const app = express()

const jsonParser = bodyParser.json()
app.use(jsonParser)

app.use(leagueRouter)
app.use(teamRouter)

const port = process.env.PORT || 3000

function onListen () {
  console.log(`Listening on :${port}`)
  // console.log('Listening on :' + port)
}

app.listen(port, onListen)
