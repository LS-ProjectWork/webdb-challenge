const express = require('express');

const server = express();

server.use(express.json());

server.listen(6000, () => {
    console.log('Server is fired up on port 6000!')
})