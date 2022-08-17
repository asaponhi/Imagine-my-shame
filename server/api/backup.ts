// // export default (req, res) => 'Hello Server API'

// import { useBody, useCookies, useQuery, createApp } from 'h3'

// const app = createApp()

// export default  (req, res) => {
//   console.log("req",req)
//   console.log("res",res)
//   const query = useQuery(req)
//   const body =  useBody(req) // only for POST request
//   const cookies = useCookies(req)
  
//   return { query, body, cookies }
// }





// import express from "express"
// // const app = express()

// // // app.use(express.json())

// // // app.get("/", (req, res) => {
// // //   res.json({
// // //     message:"test"
// // //   })
// // // })

// // // app.post('/api/message', (req, res) => {
// // app.post('/', (req, res) => {
// //   console.log(req.body);
// //   res.send("Received POST Data!");

// // });

// // export default app


// // const router = express.Router()

// // router.get('/test', (req, res, next) => {
// //   const param = { test: 'success' }
// //   res.header('Content-Type', 'application/json; charset=utf-8')
// //   res.send(param)
// // })

// // module.exports = router