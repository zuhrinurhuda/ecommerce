const router = require('express').Router();
const customers = require('../controllers/customers')

router.get('/', customers.getAll)
router.post('/', customers.create)
router.put('/:id', customers.update)
router.delete('/:id', customers.remove)

module.exports = router
