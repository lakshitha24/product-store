const express = require('express')
const route = express.Router()
const { getAllProduct,
    getAllProductsStatic } = require('../controllers/products');

route.route('/').get(getAllProduct);
route.route('/static').get(getAllProductsStatic);

module.exports = route;

