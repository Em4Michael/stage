const { broadcastMessage } = require('../services/websocketService');

const handleConnection = (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        try {
            const parsedMessage = JSON.parse(message);
            console.log('Received:', parsedMessage);
            broadcastMessage(JSON.stringify(parsedMessage));
        } catch (error) {
            console.error('Error parsing message:', error);
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
};

module.exports = { handleConnection };