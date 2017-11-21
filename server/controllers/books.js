const Book = require('../models/Book')
const ObjectId = require('mongodb').ObjectId

let getAll = (req, res) => {
  Book.find()
  .then(books => res.send(books))
  .catch(err => res.status(500).send(err))
}

let create = (req, res) => {
  let book = new Book({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock,
    price: req.body.price
  })

  book.save()
  .then(result => res.send(result))
  .catch(err => res.status(500).send(err))
}

let update = (req, res) => {
  let id = {_id: ObjectId(req.params.id)}
  Book.findById(id)
  .then(book => {
    book.isbn = req.body.isbn || book.isbn
    book.title = req.body.title || book.title
    book.author = req.body.author || book.author
    book.category = req.body.category || book.category
    book.stock = req.body.stock || book.stock
    book.price = req.body.price || book.price

    book.save()
    .then(book => res.send(book))
    .catch(err => res.status(500).send(err))
  })
  .catch(err => res.status(500).send(err))
}

let remove = (req, res) => {
  let id = {_id: ObjectId(req.params.id)}

  Book.findByIdAndRemove(id)
  .then(book => res.send(book))
  .catch(err => res.status(500).send(err))
}

module.exports = {
  getAll,
  create,
  update,
  remove
};
