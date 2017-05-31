var express = require('express');
var router = express.Router();
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {
	var students = ['Marissa', 'Merilee', 'Chris', 'Stephen', 'Drew', 'Ian', 'Shane', 'Chad', 'Guido', 'Porscha', 'Carla', 'YingRong', 'Michael', 'Hayes', 'Nick', 'Daniel']
  res.render('index', { 
  	title: 'Express',
  	studentsArray:students 
  });
});

router.get('/reverse', function(req, res, next) {
	var students = ['Marissa', 'Merilee', 'Chris', 'Stephen', 'Drew', 'Ian', 'Shane', 'Chad', 'Guido', 'Porscha', 'Carla', 'YingRong', 'Michael', 'Hayes', 'Nick', 'Daniel']
  res.render('reverse', { 
  	title: 'Express',
  	studentsArray:students 
  });
});

module.exports = router;
