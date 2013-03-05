
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , Imager = require('imager')
  , async = require('async')
  , Record = mongoose.model('Record')
  , _ = require('underscore')

/**
 * Create a record
 */

exports.create = function (req, res) {
  var record = new Record(req.body)
  record.uploadAndSave(function (err) {
    if (err) {
      res.render('/')
    }
    else {
      res.redirect('/')
    }
  })
}
