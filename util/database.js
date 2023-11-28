const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense','root','Amma007#',{
    dialect:'mysql',
    host:'localhost'
});


module.exports = sequelize;