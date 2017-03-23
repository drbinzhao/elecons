const User = require(__base + 'models/User')

const generateFakeData = require('../../../data/generator.js')

function register(req, res) {

  const { username, password } = req.body
  const account = new User({ username })
  
  User.register( account, password, (err, user) => {
    if (err) {
      return res.json({success: false, msg: 'Username already exists.'})
    }
    console.log(user)
    console.log(user._id)
    generateFakeData(user._id)
    res.json({success: true, msg: 'Successful created new user.'})
  })

}

module.exports = register