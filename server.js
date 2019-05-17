const express = require('express')
const bodyParser = require('body-parser');
const weather = require('./routes/weather')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('index');
})

app.post('/', weather.forecast)

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
