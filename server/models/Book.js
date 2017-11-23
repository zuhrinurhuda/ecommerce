const mongoose = require('mongoose')

// mongoose.Promise = global.Promise
// mongoose.connection.once('open', () => {
//   console.log('connection success')
// }).on(err => console.log(err))

var bookSchema = mongoose.Schema({
  isbn:  String,
  title: String,
  author: String,
  category: String,
  // stock: Number,
  price: Number
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
