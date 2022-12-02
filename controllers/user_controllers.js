const { User } = require('../models')

class UserController {

  static register(req, res) {
    const { firstName, lastName, location, birthday} = req.body
    const user = {
      firstName,
      lastName,
      location,
      birthday,
    }

    User.create(user)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static update(req, res) {
    const id = +req.params.id
    const { firstName, lastName, location, birthday} = req.body
    const user = {
      firstName,
      lastName,
      location,
      birthday,
    }

    User.update(user, {
      where: {
        id
      }
    })
    .then(user => {
      return User.findByPk(id)
    })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static remove(req, res) {
    const id = +req.params.id
    User.destroy({
      where: {
        id
      }
    })
    .then(user => {
      res.status(200).json(`User with id ${id} successfully deleted`)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
}

module.exports = { UserController }