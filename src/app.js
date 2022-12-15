const express = require('express');
const { OK } = require('./utils/httpResponse/httpStatusCode');

const app = express();

app.get('/', (req, res) => {
    res.status(OK).json()
})


module.exports = app;