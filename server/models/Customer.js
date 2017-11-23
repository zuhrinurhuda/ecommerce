const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/library')

var customerSchema = mongoose.Schema({
  name: {
    type: String,
    default: null
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    default: null
  },
  zipcode: {
    type: String,
    default: null
  },
  phone: {
    type: String,
    minlength: 6
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: null
  }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
