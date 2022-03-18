const mongoose = require("mongoose");
const AdminSchema = mongoose.Schema({
    Nom: { type: String },
    Prenom: { type: String },
    email: { type: String },
    Password: { type: String },
    adress: { type: String },
    City: { type: String },
    state: { type: String },
    Zip: { type: String },
});
const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;