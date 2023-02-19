const { Product } = require("../../db.js")

const getProduct = async (req, res) => {
    const { name } = req.query;
    // console.log(name, 'NAME');
    try {
        if(name) {
            const productAll = await Product.findAll();
            // console.log(productAll, 'PROD');
            const productName = productAll.filter(pt => pt.name.toLowerCase().match(name.toLowerCase())); 
            if(!productName.length) return res.send({ menssage: 'Product not found' });
            res.send(productName);
        } else {
            const productAll = await Product.findAll();
            // console.log(productAll, 'PROD');
            res.send(productAll);
        }
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { getProduct };