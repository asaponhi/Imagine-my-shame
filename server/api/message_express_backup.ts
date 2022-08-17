import express from "express"
import bodyParser from "body-parser"

const app = express();


// app.set("views", `${__dirname}/views`);
// app.set("view engine", "ejs");

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/message", (req, res)=> {
  console.log("getを受けた。")
  // res.send("getを受けた。");
});

// app.post("/", (req, res) => {
//   console.log("req.body",req.body)
//   res.send(req.body);
// });

// app.listen(8080);
// console.log("server listening...");

// app.listen(3000);