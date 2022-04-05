const express = require("express");
const User = require("../Models/Users");

const router = express.Router();



router.post("/add_users", (req, res) => {
  const usres = new User({
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,

  });
  usres.save();
  res.status(200).json({
    message: "User added succesful",
  });
});


router.get("/get_allUsers", (req, res) => {
  User.find((err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        users: docs
      })
    }
  })
});
router.delete("/delete_user/:id", (req, res) => {
  console.log("herreeeeeee id ", req.params.id);
  User.deleteOne({ _id: req.params.id }).then(
    res.status(200).json({
      message: "user deleted succesful",
    })
  );
});

router.get("/get_conseilleur_byId/:id", (req, res) => {
  User.findOne({ _id: req.params.id }).then((findedObject) => {
    if (findedObject) {
      res.status(200).json({
        user: findedObject,
      });
    }
  });
});
router.put("/Update_conseilleur", (req, res) => {

  const conseilleur = {
    _id: req.body._id,
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    password: req.body.password,

  };
  User.updateOne({ _id: req.body._id }, conseilleur).then(
    res.status(200).json({
      message: "conseilleur updated successfuly",
    })
  );
})












module.exports = router;