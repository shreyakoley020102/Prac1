const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  var firstName = req.body.fName;
  var lasttName = req.body.lName;
  var email = req.body.email;

  console.log(firstName, lasttName, email);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

//API KEY
//e8fdbb14eb5c0c880dc96d329aba473f - us6;
