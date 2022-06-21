var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
res.redirect('/giphys')

});
router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'About ',
    currentPage:'about'

  });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Contact',
    currentPage:'contact',

  });
});
module.exports = router;


router.get('/login', function(req, res, next) {
  res.render('login', {
    title: 'Login',
    currentPage:'login'
  });
});


// router.post('/login', function(req, res, next) {
//   let email =req.body.email;
//   let password =req.body.password;
//   if(!name || name.leng)
//
//   console.log(req.body);
// res.json('OK');
// });

router.get('/register', function(req, res, next) {
  res.render('register', {
    title: 'register',
    currentPage:'Register'
  });
});







