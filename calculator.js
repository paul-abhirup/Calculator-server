// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  //send vs sendFile - sendFile sends the entire file to the browser while send sends the content of the file to the browser
  res.sendFile(__dirname + "/index.html");
  //__dirname is a constant that holds the current directory path of the file tells the server where the file is located
  //  /index.html is the file that we want to send to the browser
  // so in the server we dont need to find the file just __dirname + /index.html this will find the file for us
});

app.post("/", function (req, res) {
  //console.log(req.body);
  //output of this     { num1: '11', num2: '22', submit: '' }
  
  //req.body is an object that contains the data from the form
  //we can access the data from the form by using req.body

  //console.log(req.body.num1); //prints num1 value from the form to the console 

 var num1 = req.body.num1; //stores the value of num1 from the form to the variable var
 //req.body.num1 is a string so we need to convert it to a number

 var num2 = req.body.num2; //stores the value of num2 from the form to the variable var
 var result = Number(num1) + Number(num2); //adds the values of num1 and num2 and stores it in the variable result
  res.send("the sum is " + result); //sends the result to the browser
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
