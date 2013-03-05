
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , Imager = require('imager')
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]
  , imagerConfig = require(config.root + '/config/imager.js')
  , Schema = mongoose.Schema


/**
 * Record Schema
 */

var RecordSchema = new Schema({
  numero: {type : Number, default : 0, trim : true}
})

/**
 * Methods
 */

RecordSchema.methods = {

  /**
   * Save record
   *
   * @param {Object} images
   * @param {Function} cb
   * @api public
   */

  uploadAndSave: function (fn) {
    var self = this
	self.save(fn)
  }

}

mongoose.model('Record', RecordSchema)
