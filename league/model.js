const Sequelize = require('sequelize')
const db = require('../db')

const League = db.define(
  'league',
  {
    name: Sequelize.STRING
  }
)

module.exports = League
