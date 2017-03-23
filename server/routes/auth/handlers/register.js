const User = require(__base + 'models/User')

const generateFakeData = require('../../../data/generator.js')

function register(req, res) {

  const { username, password } = req.body
  const account = new User({ username })
  
  User.register( account, password, (err, user) => {
    if (err) {
      return res.json({success: false, msg: 'Username already exists.'})
    }
    
    let id = user._id
    console.log(id)
    
    const dataUser = generateFakeData(user._id)

    //const dataUser = require(`../../../data/${id}/data.json`)
    console.log('!!!!!!!')
    console.log(dataUser.monthly)
  

    let consumption2016 = dataUser.monthly[0]
    let consumption2017 = dataUser.monthly[1]

    User.findByIdAndUpdate( id,  { consumption2016, consumption2017 } )
    .then( user => {
      console.log('user has been updated succesfully')
      res.status(200).json(user)
    })
    .catch( err => res.status(500).json(err) )





    res.json({success: true, msg: 'Successful created new user.'})
  })

}

module.exports = register