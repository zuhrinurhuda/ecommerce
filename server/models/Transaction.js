const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
const Schema = mongoose.Schema;

var transactionSchema = mongoose.Schema({
  member:  {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
