var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/index', function(req, res, next) {
  res.redirect('/');
});

router.get('/technologies', function(req, res, next) {
  res.render('technologies.html');
});

router.get('/projects', function(req, res, next) {
  res.render('projects.html');
});

router.get('/contact', function(req, res, next) {
  res.render('contact.html');
});

router.get('/about', function(req, res, next) {
  res.render('about.html');
});

module.exports = router;
