const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const getUser = require('./handlers/getUser')
const updateUser = require('./handlers/updateUser')


router.get('/users', getAll)
router.get('/users/:id', getUser)
router.put('/users/:id', updateUser)


module.exports = router
