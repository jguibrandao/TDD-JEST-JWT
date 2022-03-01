const routes = require('express').Router()
const { User } = require('./app/models/User')

User.create({
    name: 'Joao',
    email: 'jguibrandao@gmail.com',
    password_hash: '123123213412'
})

module.exports = routes