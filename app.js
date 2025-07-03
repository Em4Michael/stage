const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');
require('dotenv').config();
const websocketRoute = require('./src/routes/websocketRoute');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(cors({
    origin: '*',
    methods: ['GET'],
    credentials: true
}));
app.use(express.static('public'));

// Initialize WebSocket route
websocketRoute(wss);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});