const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/library')

var customerSchema = mongoose.Schema({
  name:  String,
  address: String,
  zipcode: String,
  phone: {
    type: String,
    minlength: 6
  }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
