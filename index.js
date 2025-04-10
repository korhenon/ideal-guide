import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Новый клиент подключился!');

    ws.on('message', (message) => {
        console.log(`Получено сообщение: ${message}`);
    });

    setInterval(() => {
        ws.send("Hello my user")
    }, 10000)

    ws.on('close', () => {
        console.log('Клиент отключился');
    });
});