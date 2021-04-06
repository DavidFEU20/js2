const mongodb = require('mongoose');

const orderSchema = mongodb.Schema({
    userId: { type: String},
    cart: { type: Array },
    totalPrice: { type: Number },

    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongodb.model('order', orderSchema);