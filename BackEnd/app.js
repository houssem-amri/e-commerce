const express = require("express") //import express
const bodyParser = require("body-parser") //import bodyparser
const mongoose = require("mongoose") //import mongoose



mongoose.connect('mongodb://localhost:27017/E-COMMERCEDB', { useNewUrlParser: true, useUnifiedTopology: true});

var ProduitRouter = require ("./Routes/Produit")
var CategorieRouter = require("./Routes/Categorie")
var UserRouter = require("./Routes/Users")

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Security configuration
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, X-Requested-with, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS, PATCH, PUT');
	next();
});


app.use("/api", ProduitRouter);
app.use("/api", CategorieRouter);
app.use("/api", UserRouter);


module.exports=app