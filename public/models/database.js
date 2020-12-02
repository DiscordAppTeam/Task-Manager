const Sequelize = require('sequelize');
const sequelize = new Sequelize('db_tdl', 'root', 'passbase', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
