var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var config = require('./config.json');

var transporter = nodemailer.createTransport('smtps://' + config.email + ':' + config.password + '@smtp.mail.yahoo.com');

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

router.post('/send', function(req, res, next) {

	var mailOptions = {
		from: 'ethan.honeycutt13@yahoo.com', // sender address
		to: 'ethan.honeycutt13@yahoo.com', // list of receivers
		subject: req.body.subject, // Subject line
		text: req.body.message + ' From: ' + req.body.name + ' Email: ' + req.body.email, // plaintext body
		html: '' // html body
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			return console.log(error);
		}
		console.log('Message sent: ' + info.response);
		res.render('contact.html');
	});

});

module.exports = router;