// imporyt datatypes and db connection
const {DataTypes} = require('sequelize'); // define the db types
const db = require('../db/conn')

// define the model task
const Task = db.define('Task', {
    title: {
        type: DataTypes.STRING,
    required: true,
    },
    description: {
        type: DataTypes.STRING,
    required: true,
    },
    done: {
        type: DataTypes.BOOLEAN,
    required: true,
    },
})

module.exports = Task;