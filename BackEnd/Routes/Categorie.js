const express = require("express");
const Categorie = require ("../Models/Categorie")


const router = express.Router();
router.post("/ajouter_categorie", (req, res) => {
    console.log("hello req .body", req.body);
    const categorie = new Categorie({
      Categorie: req.body.Categorie,
    });
    categorie.save();
    res.status(200).json({
      message: "Categorie added succesful",
    });
  });
  router.get("/get_categorie", (req, res) => {
    Categorie.find((err, docs) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          data: docs,
        });
      }
    });
  });
  module.exports = router;