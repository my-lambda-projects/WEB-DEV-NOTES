const db = require('../db');

const Task = db.define('task', {
    name: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    difficulty: db.Sequelize.INTEGER,
});

module.exports = Task;
