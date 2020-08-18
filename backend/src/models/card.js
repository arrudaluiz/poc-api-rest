const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  name: String,
  front: Object,
  back: Object
});

module.exports = mongoose.model('Card', CardSchema);