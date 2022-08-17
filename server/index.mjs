import express from 'express'
import ws from 'ws'

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3030

const wss = new ws.Server({ port: port });
const app = express()

wss.on('connection', function connection(s) {
  s.on('message', function incoming(message) {
    console.log('received: %s', message);
    wss.clients.forEach(function (client) {
      client.send(message);
      // client.send(message + ' : ' + new Date());
    });
  });
  s.on('close', function () {
    console.log('I lost a client');
  });
});

// 起動
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port)
