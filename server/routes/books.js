const router = require('express').Router()
const books = require('../controllers/books')

router.get('/', books.getAll)
router.post('/', books.create)
router.put('/:id', books.update)
router.delete('/:id', books.remove)

module.exports = router
