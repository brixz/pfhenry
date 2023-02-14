const Router = require('express');
const { postProducts } = require('../../controllers/products/postProducts');

const productsRouter = Router();

// POST
productsRouter.post('/', postProducts)

module.exports = productsRouter;