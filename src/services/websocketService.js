const WebSocket = require('ws');

let clients = [];

const broadcastMessage = (message) => {
    clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
};

const addClient = (ws) => {
    clients.push(ws);
};

const removeClient = (ws) => {
    clients = clients.filter(client => client !== ws);
};

module.exports = { broadcastMessage, addClient, removeClient };