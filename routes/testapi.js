var express = require('express')
var router = express.Router()

// middleware that is specific to this icm router
router.use(function timeLog (req, res, next) {
  console.log('route testapi')
  next()
})

// define the home page route
router.get('/', function (req, res) {
  console.log('index');
  res.render('pages/test');

})


router.get('/data', function (req, res) {

  var data1 = [
        { name: 'Bloody Mary', age: 3 },
        { name: 'Martini', age: 5 },
        { name: 'Scotch', age: 10 }
    ];
    var tagline = "This is tagline";

    res.render('pages/index', {
        data: data1,
        tagline: tagline
    });

})

router.get('/links', function (req, res) {
 // console.log('routes testapi');
  //res.send('testapi link page');
  res.redirect('/');
})


router.get('/login', function (req, res) {
 // console.log('routes testapi');
  //res.send('testapi link page');
  res.send('<p>some html</p>');
})

router.get('/ip', function (req, res) {
 // console.log('routes testapi');
  //res.send('testapi link page');
  var ip_add = req.ip;
  ip_add=ip_add.replace('::ffff:', '');
  res.send(ip_add);
})

router.get('/file/:name', function (req, res) {
 // console.log('routes testapi');
  //res.send('testapi link page');
  res.send('<p>some html</p>');
})




module.exports = router