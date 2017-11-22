const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
const Schema = mongoose.Schema;

var transactionSchema = mongoose.Schema({
  customer:  {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  transactionDate: {
    type: Date,
    default: Date.now
  },
  itemList: [{
    itemId: {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    },
    name: String,
    quantity: Number,
    subTotal: Number,
  }],
  total: Number
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
