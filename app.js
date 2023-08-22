var express = require("express");
var mongoose = require("mongoose");
var url = "mongodb://localhost/AlienDbBox";
var app = express();

mongoose.connect(url, { useNewUrlParser: true });

//connection to mongodb
const conn = mongoose.connection;

//openning mongodb conn
conn.on("open", function () {
  console.log("connected");
});

app.use(express.json());

const AlienRouter = require("./aliens");

app.use("/aliens", AlienRouter);

app.listen(9000, () => {
  console.log("server started");
});
