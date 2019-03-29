const express = require('express');

const server = express();

const projectsRouter = require('./data/routers/projects-router');
const actionsRouter = require('./data/routers/actions-router');

server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.get('/', (req, res) => {
  res.send('Server running...');
});

module.exports = server;
