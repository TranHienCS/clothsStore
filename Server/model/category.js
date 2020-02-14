const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    nameCategory: String,
    products: [{type: mongoose.Schema.Types.ObjectId,ref: 'Cloth'}]
})

module.exports = mongoose.model('Category', categorySchema);