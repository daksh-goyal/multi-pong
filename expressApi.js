const express = require('express');
const path = require('path');

const expressApi = express();

expressApi.use(express.static(path.join(__dirname, 'public')));

expressApi.use('/', express.static('index.html'));

module.exports = expressApi;