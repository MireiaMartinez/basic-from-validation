const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
    username: String,
    email: String,
    password: String,
    password2: String
});
  
module.exports = mongoose.model('User', User);