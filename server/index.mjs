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




// import express from 'express'
// import expressWs from 'express-ws'

// // const app = express()

// const appBase = express();
// const wsInstance = expressWs(appBase);
// const { app } = wsInstance; // let app = wsInstance.app;


// const host = process.env.HOST || 'localhost'
// // const host = process.env.HOST || '10.215.10.138'
// const port = process.env.PORT || 3030

// // WebSocket用のエンドポイントを追加
// expressWs(app)
// app.ws('/ws', (ws, req) => {
//   ws.on('message', (msg) => {
//     console.log('from server: ' + msg)
//   })
// })

// // Nuxtのビルド周りは省略

// // 起動
// app.listen(port, host)
// console.log('Server listening on ' + host + ':' + port)