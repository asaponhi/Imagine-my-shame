/* 
PART1 こっちで上手く行く時とエラー出る時がある。その時はPART２を動かす。
*/ 
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

/* 
PART2 こっちで上手く行く時とエラー出る時がある。その時はPART1を動かす。
*/ 
// import express from 'express'

// const host = process.env.HOST || 'localhost'
// const port = process.env.PORT || 3030

// // 6 throw new SyntaxError(`Invalid URL: ${address}`);
// // import Server from 'ws'
// // const wss = new Server({ port: port });
// // 5
// // import ws from 'ws'
// // const server = ws.Server
// // const wss = new server({ port: port });

// // 4
// // ReferenceError: require is not defined in ES module scope, you can use import instead
// // var server = require('ws').Server;
// // var wss = new server({ port: port });

// // 3 return Blob
// import { WebSocketServer } from 'ws'
// const wss = new WebSocketServer({ port: port });

// // 2
// // import ws from 'ws'

// // const server = WebSocketServer.Server
// // const wss = new server({ port: port });
// // 1
// // const wss = new ws.Server({ port: port });
// const app = express()

// wss.on('connection', function connection(s) {
//   s.on('message', function incoming(message) {
//     console.log('received: %s', message);
//     wss.clients.forEach(function (client) {
//       client.send(message);
//       // client.send(message + ' : ' + new Date());
//     });
//   });
//   s.on('close', function () {
//     console.log('I lost a client');
//   });
// });

// // 起動
// app.listen(port, host)
// console.log('Server listening on ' + host + ':' + port)
