const { Router } = require('express')
const Team = require('./model')
const League = require('../league/model')

const router = new Router()

router.get(
  '/team',
  (request, response) => {
    Team
      .findAll({
        include: [League]
      })
      .then(teams => response
        .send(teams)
      )
  }
)

router.post(
  '/team',
  (request, response) => {
    Team
      .create(request.body)
      .then(team => response
        .send(team)
      )
  }
)

module.exports = router
