import express from "express"
import bodyParser from "body-parser"

const app = express();


// app.set("views", `${__dirname}/views`);
// app.set("view engine", "ejs");

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/new", function (req, res) {
//   res.render("new");
// });

app.post("/create", function (req, res) {
  res.send("req.body.msg");
});

// app.listen(8080);
// console.log("server listening...");

// app.listen(3000);