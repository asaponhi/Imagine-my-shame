// ~/server/index.ts
import { Request, Response } from "express";
// import * as HttpStatus from "http-status-codes";

import bodyParser from "body-parser";
import express from "express";

const app = express();

// setup body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// select
app.post("/api/message", async (req: Request, res: Response) => {
   // ...
  return 'a'
});

// // update
// app.post("/api/update", async (req: Request, res: Response) => {
//    // ...
// });

// // delete
// app.post("/api/delete", async (req: Request, res: Response) => {
//   // ...
// });

export default app;




// import express from "express"
// const app = express()

// app.use(express.json())

// app.get("/", (req, res) => {
//   res.json({
//     message:"test"
//   })
// })

// export default app