const express = require('express');
const { OK } = require('./utils/httpResponse/httpStatusCode');
const users = require('./database/users.json');

const app = express();

app.get('/', (_req, res) => {
    res.status(OK).json(users)
})


module.exports = app;