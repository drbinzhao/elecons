const User = require( __base + 'models/User')

module.exports = (req,res) => {

  const  id  = req.params.id
  let { firstName, lastName, email, contractedPower, energyTariff } = req.body
  const updatedAt = Date.now()
  
  consumption =  [Date.now() , (Math.random()).toFixed(2)] 
  maxPower =''

  User.findByIdAndUpdate( id,  { firstName, lastName, email, contractedPower, energyTariff, updatedAt, consumption } )
    .then( user => {
      console.log('user has been updated succesfully')
      res.status(200).json(user)
    })
    .catch( err => res.status(500).json(err) )

}


