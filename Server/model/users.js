const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    id: String,
    fullname: String,
    username: String,
    password: String,
    isAdmin: Boolean,
    myproducts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cloth'}]
})

module.exports = mongoose.model('User', userSchema);