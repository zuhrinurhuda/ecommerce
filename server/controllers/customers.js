const Customer = require('../models/Customer')
const ObjectId = require('mongodb').ObjectId

let getAll = (req, res) => {
  Customer.find()
  .then(customers => res.send(customers))
  .catch(err => res.status(500).send(err))
}

let create = (req, res) => {
  // console.log(req.body.customer);
  let customer = new Customer(req.body.customer)

  customer.save()
  .then(result => res.send(result))
  .catch(err => res.status(500).send(err))
}

let update = (req, res) => {
  let id = {_id: ObjectId(req.params.id)}

  Customer.findById(id)
  .then(customer => {
    customer.name = req.body.name || customer.name,
    customer.memberId = req.body.memberId || customer.memberId,
    customer.address = req.body.address || customer.address,
    customer.zipcode = req.body.zipcode || customer.zipcode,
    customer.phone = req.body.phone || customer.phone

    customer.save()
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
  })
  .catch(err => res.status(500).send(err))
}

let remove = (req, res) => {
  let id = {_id: ObjectId(req.params.id)}

  Customer.findByIdAndRemove(id)
  .then(customer => res.send(customer))
  .catch(err => res.status(500).send(err))
}

module.exports = {
  getAll,
  create,
  update,
  remove
};
