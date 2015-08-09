'use strict';

var _ = require('lodash');
var Poll = require('./poll.model');

// Get list of polls
exports.index = function(req, res) {
  Poll.find(function (err, polls) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(polls);
  });
};

// Adding the show:'/:user_name/:poll_name'
exports.show = function(req, res) {
  //for all polls
  if (req.params.poll_name === 'all') {
    Poll.find({'user_name': req.params.user_name}, function(err, poll) {
      if(err) { return handleError(res, err); }
      if(!poll) { return res.send(404); }
      return res.json(poll);
    });
  // Return single poll
  } else {
    Poll.find({'user_name': req.params.user_name, 'poll_name': req.params.poll_name}, function(err, poll) {
      if(err) { return handleError(res, err); }
      if(!poll) { return res.send(404); }
      return res.json(poll);
    });
  }
};

// Creates a new poll in the DB.
exports.create = function(req, res) {
  Poll.create(req.body, function(err, poll) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(poll);
  });
};

// Updates an existing poll in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Poll.findById(req.params.id, function (err, poll) {
    if (err) { return handleError(res, err); }
    if(!poll) { return res.status(404).send('Not Found'); }
    var updated = _.merge(poll, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(poll);
    });
  });
};

// Deletes a poll from the DB.
exports.destroy = function(req, res) {
  Poll.findById(req.params.id, function (err, poll) {
    if(err) { return handleError(res, err); }
    if(!poll) { return res.status(404).send('Not Found'); }
    poll.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}