const Sequelize = require('sequelize')
const db = require('../db')
const League = require('../league/model')

const Team = db.define(
  'team',
  {
    name: Sequelize.STRING
  }
)

Team.belongsTo(League)
League.hasMany(Team)

module.exports = Team
