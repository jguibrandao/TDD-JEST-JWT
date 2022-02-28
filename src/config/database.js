require("dotenv").config()

module.exports = {
  host: '127.0.0.1',
  username: 'postgres',
  password: process.env.DB_PASSWORD,
  database: 'TDD',
  dialect: 'postgres',
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}