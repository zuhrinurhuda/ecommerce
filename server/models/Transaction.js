const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('dotenv').config()

// mongoose.connect('mongodb://localhost/library')
// console.log(process.env.MONGO_PASSWORD)
// mongoose.connect(`mongodb://zuhri:${process.env.MONGO_PASSWORD}@cluster0-shard-00-00-67zih.mongodb.net:27017,cluster0-shard-00-01-67zih.mongodb.net:27017,cluster0-shard-00-02-67zih.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`)

// mongoose.Promise = global.Promise
// mongoose.connection.once('open', () => {
//   console.log('connection success')
// }).on(err => console.log(err))

var transactionSchema = mongoose.Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  itemList: [{
    _id: {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    },
    quantity: Number
  }],
  total: Number,
  transactionDate: {
    type: Date,
    default: Date.now
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
