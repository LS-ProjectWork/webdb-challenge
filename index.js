const express = require('express');

const actionsRoute = require('./routers/actionsRouter');
const projectRoute = require('./routers/projectsRouter');

const server = express();

server.use(express.json());

server.use('/actions', actionsRoute)
server.use('/projects', projectRoute)

server.listen(6000, () => {
    console.log('Server is fired up on port 6000!')
})