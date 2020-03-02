const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
    username: String,
    color: String,
    quantity: Number,
    size: String,
    price:Number,
    image: String,
    name: String,
    products: {type: mongoose.Schema.Types.ObjectId, ref: 'clothes'}
},{
    collection: 'cart'
})

module.exports = mongoose.model('cart',cartSchema);