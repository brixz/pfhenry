const Router = require('express');
const { deleteProduct } = require('../../controllers/products/deleteProduct');
const { getIdProduct } = require('../../controllers/products/getIdProduct');
const { getProduct } = require('../../controllers/products/getProducts');
const { postProducts } = require('../../controllers/products/postProducts');

const productsRouter = Router();

// GET
productsRouter.get('/', getProduct);
productsRouter.get('/:id', getIdProduct);

// POST
productsRouter.post('/', postProducts)

// DELETE
productsRouter.delete('/:id', deleteProduct);

module.exports = productsRouter;