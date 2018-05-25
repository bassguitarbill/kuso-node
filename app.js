const express = require('express')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index')
})

module.exports = app
