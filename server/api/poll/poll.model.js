'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
  user_name: String,
  poll_title: String,
  poll_options: Array,
  poll_results: Array,
  poll_votes: Array,
  poll_voters: Array
});

module.exports = mongoose.model('Poll', PollSchema);