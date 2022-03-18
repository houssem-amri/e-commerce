const express = require("express");
const Admin = require("../Models/Admin");

const router = express.Router();
router.post("/ajouter_Conseilleur", (req, res) => {
    console.log("hello req .body", req.body);
    const admin = new Admin({
        Nom: req.body.Nom,
        Prenom: req.body.Prenom,
        email: req.body.email,
        Password: req.body.Password,
        adress: req.body.adress,
        City: req.body.City,
        state: req.body.state,
        Zip: req.body.Zip,
    });
    admin.save();
    res.status(200).json({
      message: "Admin added succesful",
    });
  });
 
  module.exports = router;
