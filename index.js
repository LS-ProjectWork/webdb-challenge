const express = require('express');

const actionsRoute = require('./routers/actionsRouter');

const server = express();

server.use(express.json());

server.use('/actions', actionsRoute)

server.listen(6000, () => {
    console.log('Server is fired up on port 6000!')
})