const { Router } = require('express');
const productsRouter = require('./productsRouter/productsRouter');
const userReouter = require('./usersRouter/usersRouter');
const router = Router();

// GET
router.use('/users', userReouter);
router.use('/products', productsRouter);

module.exports = router;