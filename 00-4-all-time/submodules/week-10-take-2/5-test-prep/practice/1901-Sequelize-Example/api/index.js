const express = require('express');
const { models } = require('../db');
const app = express();

app.get('/tasks/:id', (req, res, next) => {
   const { params: { id } } = req;

   if (typeof id === 'string') {
       models.Task
           .findByPk(parseInt(id), {
               include: [models.Project]
           })
           .then((task) => {
               if (!task) res.sendStatus(404);
               const { name, difficulty, project: { name: projectName, date } } = task;

               res.send({
                   task: {
                       name,
                       difficulty,
                       project: {
                           name: projectName,
                           date,
                       },
                   }
               })
           })
   } else {
       res.sendStatus(404);
   }
});

app.get('/projects/:id', (req, res, next) => {
    const { params: { id } } = req;

    if (typeof id === 'string') {
        models.Project
            .findByPk(parseInt(id), {
                include: [models.Task]
            })
            .then((project) => {
                if (!project) res.sendStatus(404);
                const { name, date, tasks } = project;

                res.send({
                    project: {
                        name,
                        date,
                        tasks: tasks.map(({ name, difficulty }) => ({ name, difficulty })),
                    }
                })
            })
    } else {
        res.sendStatus(404);
    }
});

app.get('/tasks', (req, res, next) => {
    models.Task
        .findAll()
        .then((tasks) => {
             res.send({
                 tasks: tasks.map(({ name, difficulty }) => ({
                     name,
                     difficulty,
                 }))
             })
        })
        .catch(next);
});

app.get('/projects', (req, res, next) => {
    models.Project
        .findAll()
        .then((projects) => {
            res.send({
                projects: projects.map(({ name, date }) => ({
                    name,
                    date,
                }))
            })
        })
        .catch(next);
});

module.exports = app;
