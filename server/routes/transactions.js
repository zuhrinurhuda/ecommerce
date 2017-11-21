const router = require('express').Router()
const transactions = require('../controllers/transactions')

router.get('/', transactions.getAll)
router.post('/', transactions.create)
router.put('/:id', transactions.update)
// router.delete('/:id', transactionsController.destroy)

module.exports = router
