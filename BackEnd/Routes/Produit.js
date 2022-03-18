const express = require("express");
const Produit = require("../Models/Produit");

const router = express.Router();
router.post("/ajouter_Produits", (req, res) => {
    console.log("hello req .body", req.body);
    const produit = new Produit({
      nomProduit: req.body.nomProduit,
      categorie: req.body.categorie,
      code: req.body.code,
      quantite : req.body.quantite,
      prix: req.body.prix,
      description: req.body.description,
    });
    produit.save();
    res.status(200).json({
      message: "Produit added succesful",
    });
  });

  router.get("/get_produit", (req, res) => {
    Produit.find((err, docs) => {
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