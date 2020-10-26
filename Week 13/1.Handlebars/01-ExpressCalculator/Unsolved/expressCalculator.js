const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

app.get("/:num1/:operation/:num2", function (req, res) {
  const num1 = parseInt(req.params.num1);
  const operation = req.params.operator;
  const num2 = parseInt(req.params.num2);

  let result;
  switch (operation) {
    case "add":
    case "+":
      result = num1 + num2;
      break;
    case "subtract":
    case "-":
      result = num1 - num2;
      break;
    case "multiply":
    case "*":
      result = num1 * num2;
      break;
    case "divide":
    case "/": // %2F
      result = num1 / num2;
      break;
    default:
      result = "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }
  res.send(result.toString());
});

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
