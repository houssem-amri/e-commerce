const mongoose = require("mongoose");
const UsersSchema = mongoose.Schema({
    nom: { type: String },
    prenom: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String },
  
});
const User = mongoose.model("User", UsersSchema);
module.exports = User;