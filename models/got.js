let mongoose = require('mongoose');

let GotSchema = mongoose.Schema({
  img: {
    type: String,
    required: [true, 'Img field is required'],
  },
  name: {
    type: String,
    required: [true, 'Name field is required'],
  },
  house: {
    type: String,
    required: [true, 'House field is required'],
  },
  status: {
    type: String,
    required: [true, 'Status field is required'],
  },
  quotes: {
    type: String,
    required: [true, 'Quotes field is required'],
  },
});

const Got = mongoose.model('Character', GotSchema);
module.exports = Got;
