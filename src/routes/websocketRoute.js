const { handleConnection } = require('../controllers/websocketController');
const { addClient, removeClient } = require('../services/websocketService');

module.exports = (wss) => {
    wss.on('connection', (ws) => {
        addClient(ws);
        handleConnection(ws);
        ws.on('close', () => removeClient(ws));
    });
};