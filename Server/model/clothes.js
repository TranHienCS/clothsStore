const mongoose = require('mongoose');
const clothSchema = mongoose.Schema({
    product: [
        {size: String, color: String, total: Number}
    ],
    id: String,
    image: [String],
    price: Number,
    name: String,
    brand: String,
    sex: String,
    dateAdd: Date,
    rate: Number,
    comment: [String],
    description: String
})

module.exports = mongoose.model('Cloth', clothSchema);