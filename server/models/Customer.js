const mongoose = require('mongoose')
require('dotenv').config()

// mongoose.connect('mongodb://localhost/library')
// console.log(process.env.MONGO_PASSWORD)
// mongoose.connect(`mongodb://zuhri:${process.env.MONGO_PASSWORD}@cluster0-shard-00-00-67zih.mongodb.net:27017,cluster0-shard-00-01-67zih.mongodb.net:27017,cluster0-shard-00-02-67zih.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`)

// mongoose.Promise = global.Promise
// mongoose.connection.once('open', () => {
//   console.log('connection success')
// }).on(err => console.log(err))

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
