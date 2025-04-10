import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
const clients = []


wss.on('connection', (ws) => {
    clients.push(ws);
    console.log('Новый клиент подключился!');

    ws.on('message', (data, isBinary) => {
        clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(String(data));
            }
        });
    });

    ws.on('close', () => {
        console.log('Клиент отключился');
    });
});