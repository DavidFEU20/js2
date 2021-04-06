const mongodb = require('mongoose');
const Order = require('./orderSchema');


exports.getOrder = (req, res) => {
  Order.find()
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json(err))
}

exports.getOneOrder = (req, res) => {
  Order.findById(req.params.id)
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json(err))
}

exports.saveOrder = (req, res) => {
  const order = new Order({
    userId: req.body.userId,
    cart: req.body.cart,
    totalPrice: req.body.totalPrice
  })

  order.save()
  .then(() => {
    res.status(201).json({
      statusCode: 201,
      status: true,
      message: 'Order created successfully'
    })
  })
  .catch(() => {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Failed to create order'
    })
  })
}


