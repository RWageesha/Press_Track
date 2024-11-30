const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quality: { type: String, required: true },
});

module.exports = mongoose.model('Item', itemSchema);
