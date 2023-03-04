const userServices = require('./users.services')

const router = require('express').Router()

router.get('/users', userServices.getAllUsers)
router.post('/users', userServices.postNewUser)
router.get('/users/:id',userServices.getUserById)
router.patch('/users/:id',userServices.patchUser)
router.delete('/users/:id',userServices.deleteUserId)

module.exports = router 