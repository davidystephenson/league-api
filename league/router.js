const express = require('express')
const { Router } = express
const League = require('./model')
const Team = require('../team/model')
// const { Router } = require('express')

const router = new Router()

router.get(
  '/league',
  (request, response) => {
    League
      .findAll({
        include: [Team]
      })
      .then(leagues => response
        .send(leagues)
      )
  }
)

router.post(
  '/league',
  (request, response) => {
    League
      .create(request.body)
      .then(league => response
        .send(league)
      )
  }
)

module.exports = router
