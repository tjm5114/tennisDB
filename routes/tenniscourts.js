var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var TennisCourt = require('../models/TennisCourt.js');

/* GET tennis court listing. */
router.get('/', function(req, res, next) {
  TennisCourt.find(function(err, tenniscourts) {
	if (err) return next(err);
	res.json(tenniscourts);
  });
});

/* Post new tennis courts */
router.post('/', function (req,res,next) {
		TennisCourt.create(req.body, function (err, post) {
			if(err) return next(err);
			res.json(post);
		});
});

/* Get /tenniscourt id's */
router.get('/:id', function(req, res, next) {
	TennisCourt.findById(req.params.id, function(err, post){
		if(err) return next(err);
		res.json(post);
	});
});

/* Put tenniscourts/:id */
router.put('/:id', function(req, res, next) {
	delete req.body._id;
	TennisCourt.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
			if(err) return next(err);
			res.json(post);
	});
});	

/* Delete tenniscourts/:id */
router.delete('/:id', function(req, res, next) {
	TennisCourt.findByIdAndRemove(req.params.id, req.body, function(err,post) {
		if(err) return next(err);
		res.json(post);
	});
});

module.exports = router;
