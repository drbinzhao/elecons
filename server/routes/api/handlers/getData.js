module.exports = (req, res) => {
  const idUser = req.params.id
  const dataUser = require(`../../../data/${idUser}/data.json`)
  res.json (dataUser)
}
