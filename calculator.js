const express = require('express');
const app = express();

app.use(express.json());
app.post('/sum', (req, res) => {
  var num1 = req.body.a;
  var num2 = req.body.b;
  var result = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is ${result}`);
});

app.post('/subtract', (req, res) => {
    var num1 = req.body.a;
    var num2 = req.body.b;
    var result = num1 - num2;
    res.send(`The substraction of ${num1} and ${num2} is ${result}`);
  });

  app.post('/multiply', (req, res) => {
    var num1 = req.body.a;
    var num2 = req.body.b;
    var result = num1 * num2;
    res.send(`The multiplication of ${num1} and ${num2} is ${result}`);
  });

  app.post('/division', (req, res) => {
    var num1 = req.body.a;
    var num2 = req.body.b;
    var result = num1 / num2;
    res.send(`The Divison of ${num1} and ${num2} is ${result}`);
  });

  app.post('/modulo', (req, res) => {
    var num1 = req.body.a;
    var num2 = req.body.b;
    var result = num1 % num2;
    res.send(`The modulo of ${num1} and ${num2} is ${result}`);
  });

  app.post('/square', (req, res) => {
    var num1 = req.body.a;
    var num2 = req.body.b;
    var result = num1 ** num2;
    res.send(`The Square of ${num1} and ${num2} is ${result}`);
  });

  app.post('/root', (req, res) => {
    var num1 = req.body.a;
    var num2 = req.body.b;
    var result = Math.sqrt(num1,num2);
    res.send(`The Square root of ${num1} and ${num2} is ${result}`);
  });

app.listen(8080, () => {
  console.log('Server started on port 8080');
});