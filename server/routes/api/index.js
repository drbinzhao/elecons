const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const getUser = require('./handlers/getUser')
const updateUser = require('./handlers/updateUser')
const maxPower = require('./handlers/maxPower')


router.get('/users', getAll)
router.get('/users/:id', getUser)
router.put('/users/:id', updateUser)
//router.get('/users/maxPower/:id', getMaxPower)
router.put('/users/:id/maxPower', maxPower)


module.exports = router
