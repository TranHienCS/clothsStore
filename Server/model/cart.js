const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
    username: String,
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cloth'}]
})

module.exports = mongoose.Schema('Cart',cartSchema);