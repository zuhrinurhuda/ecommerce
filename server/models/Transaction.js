const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
const Schema = mongoose.Schema;

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
