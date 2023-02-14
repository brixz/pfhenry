require('dotenv').config();
const { Sequelize } = require('sequelize');
const Product = require('./moduls/Products.js');
const Types = require('./moduls/Types.js');
const Users = require('./moduls/Users.js');

const { USER_DB, PASSWORD_DB, HOST_DB, NAME_DB } = process.env;


const sequelize = new Sequelize(`postgres://${USER_DB}:${PASSWORD_DB}@${HOST_DB}/${NAME_DB}`, {
    dialect: 'postgres',
    logging: false,
    native: false
});

// const { Users } = sequelize.models;

Users(sequelize);
Product(sequelize);
Types(sequelize);

// console.log(sequelize.models, 'MODELOS db');

// Users.belongsToMany(Product, { through: 'product_user' });
// Product.belongsToMany(Users, { through: 'product_user' });


module.exports = { sequelize, ...sequelize.models };