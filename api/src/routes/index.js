const { Router } = require('express');
const productsRouter = require('./productsRouter/productsRouter');
const typesRouter = require('./typeRouter/typeRouter');
const userReouter = require('./usersRouter/usersRouter');
const router = Router();

// GET
router.use('/users', userReouter);
router.use('/products', productsRouter);
router.use('/types', typesRouter);

module.exports = router;