import express from 'express'
import expressWs from 'express-ws'

// const app = express()

const appBase = express();
const wsInstance = expressWs(appBase);
const { app } = wsInstance; // let app = wsInstance.app;


const host = process.env.HOST || '10.215.10.138'
const port = process.env.PORT || 3000

// WebSocket用のエンドポイントを追加
expressWs(app)
app.ws('/ws', (ws, req)=> {
  ws.on('message', (msg)=> {
    console.log('from server: ' + msg)
  })
})

// Nuxtのビルド周りは省略

// 起動
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port)