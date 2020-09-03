const db = require("../models");

// Defining methods for the FoodsController
module.exports = {

  createUser: function (req, res) {
    db.Users
      .create(req.body)
      .then(dbUser => console.log("create user",dbUser))
      .catch(err => res.status(422).json(err));
  },

  getUser: function (req, res) {
    db.Users
      .findOne({ id: req.params.id })
      .then(dbUser => {
        console.log("get user", dbUser)
        res.json(dbUser)
      })
      .catch(err => res.status(422).json(err));
  },

  findUsers: function (req, res) {
    db.Users
      .find({})
      .then(dbUser => console.log("find user", dbUser))
      .catch(err => res.status(422).json(err));
  },

  // addItem: function (req, res) {
  //   db.Foods.findOne(req.params.id)
  //     .then(({ _id }) => db.Users.findOneAndUpdate({}, { $push: { groceryList: _id } }, { new: true }))
  //     .then(res => res.json(res))
  //     .catch(err => res.status(422).json(err));

  // },

  populateList: function (req, res) {
    db.Users.find({_id})
      .populate("groceryList")
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  }

};
