const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/library')

var bookSchema = mongoose.Schema({
  isbn:  String,
  title: String,
  author: String,
  category: String,
  stock: Number,
  price: Number
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
