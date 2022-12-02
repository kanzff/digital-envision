const router = require('express').Router()
const { UserController } = require('../controllers/user_controllers')

router.post('/', UserController.register)
router.put('/:id', UserController.update)
router.delete('/:id', UserController.remove)

module.exports = router