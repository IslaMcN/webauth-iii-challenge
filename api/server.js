const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configRouter = require('../config/user-routes');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

configRouter(server);

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Im working!'
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = server;