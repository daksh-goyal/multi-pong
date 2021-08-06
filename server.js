const http = require('http');
const io = require('socket.io');

const apiServer = require('./expressApi');
const httpServer = http.createServer(apiServer);
const socketServer = io(httpServer);

const sockets = require('./sockets');

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT);
console.log(`Listening on port ${PORT}...`);

sockets.listen(socketServer);