const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
    myproducts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cloth'}]
},
{
    collection: 'user'
}
)

module.exports = mongoose.model('User', userSchema);