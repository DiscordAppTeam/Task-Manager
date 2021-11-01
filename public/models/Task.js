const Sequelize = require('sequelize');
const db = require('./database')

const Task = db.define('tasks', {
    title: {
        type: Sequelize.STRING(50)
    },

    description: {
        type: Sequelize.STRING(300)
    },

    data: {
        type: Sequelize.STRING(15)
    },

    hour: {
        type: Sequelize.STRING(10)
    },    

    email: {
        type: Sequelize.STRING(100)
    },

    phone: {
        type: Sequelize.STRING(15)
    },
    
    password: {
        type: Sequelize.STRING(50)
    }

})
// Task.sync({force: true}) 

module.exports = Task;



