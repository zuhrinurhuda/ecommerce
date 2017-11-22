const Transaction = require('../models/Transaction')
const ObjectId = require('mongodb').ObjectId

let getAll = (req, res) => {
  Transaction.find().populate('customer')
  .then(transactions => res.send(transactions))
  .catch(err => res.status(500).send(err))
}

let create = (req, res) => {
  let objTransactions = {
    itemId: req.body.itemId,
    name: req.body.name,
    quantity: req.body.quantity,
    subTotal: req.body.subTotal
  }
  // let reqTransactions = req.body
  let transaction = new Transaction({
    customer: req.body.customer,
    itemList: objTransactions,
    total: req.body.total
  })

  transaction.save()
  .then(result => res.send(result))
  .catch(err => res.status(500).send(err))
}

let update = (req, res) => {
  let id = {_id: ObjectId(req.params.id)}

  Transaction.findById(id)
  .then(transaction => {
    // transaction.

    transaction.save()
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
  })
  .catch(err => res.status(500).send(err))
}

module.exports = {
  getAll,
  create,
  update
};
