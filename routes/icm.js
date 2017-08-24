var express = require('express')
var router = express.Router()

// middleware that is specific to this icm router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  console.log('route icm.js')
  next()
})

// define the home page route
router.get('/', function (req, res) {
  res.send('ICM home page')
})

// define the about route
router.get('/about', function (req, res) {
  res.send('ICM About page')
})




module.exports = router