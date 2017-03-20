const User = require( __base + 'models/User')

module.exports = (req,res) => {

  const  id  = req.params.id
  

  maxPower = 3.9

  User.findByIdAndUpdate( id,  { maxPower } )
    .then( user => {
      console.log('user has been updated succesfully')
      res.status(200).json(user)
    })
    .catch( err => res.status(500).json(err) )

}


