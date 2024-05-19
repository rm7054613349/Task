const mongoose = require('mongoose');

const configurationSchema = new mongoose.Schema({
  configId: { type: String, required: true, unique: true },
  arrayData: { type: [[String]], required: true },
  remark: { type: String, default: '' }
});

module.exports = mongoose.model('Configuration', configurationSchema);
