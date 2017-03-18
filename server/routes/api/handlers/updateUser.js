const User = require('../../../models/User')

module.exports = (req,res) => {

  const { id } = req.params
  let { firstName, lastName, email, contractedPower, energyTariff } = req.body
  const updatedAt = Date.now()

  User.findByIdAndUpdate( id,  { firstName, lastName, email, contractedPower, energyTariff, updatedAt } )
    .then( user => {
      console.log('user has been updated succesfully')
      res.status(200).json(user)
    })
    .catch( err => res.status(500).json(err) )

}


