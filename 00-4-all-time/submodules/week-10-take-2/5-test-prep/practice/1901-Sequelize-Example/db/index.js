const db = require('./db');
const { Project, Task } = require('./models');

const initDb = (force = false) => {
    return db
        .authenticate()
        .then(() => {
            Project.hasMany(Task);
            Task.belongsTo(Project);

            return db.sync({ force });
        })
};

module.exports = {
    initDb,
    models: {
        Project,
        Task,
    },
};
