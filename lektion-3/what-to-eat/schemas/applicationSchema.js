const mongoose = require('mongoose');

const usageSchema = mongoose.Schema({ date: String, count: Number })

const applicationsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  api_key: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  host: {
    type: String,
    required: true
  },
  usage: {
    type: [usageSchema]
  }

}, { timestamps: true })

module.exports = mongoose.model('Application', applicationsSchema)