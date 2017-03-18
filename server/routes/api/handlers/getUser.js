const User = require( __base + 'models/User')

module.exports = (req,res) => {

  // const { user } = req
  const id = req.params.id

  User.findById( id )
    .then( user => res.json(user) )
    .catch( err => { throw err } )

}
