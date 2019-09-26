const Sequelize = require('sequelize')

const db = new Sequelize('postgres://postgres:password@localhost:5432/postgres')

db
  .sync()
  .then(() => console.log('Database synced'))
  .catch(console.error)

module.exports = db
