var input = null;
var operator = "";
var num1 = "";
var num2 = "";

var total = 0;
var initialize = false;
var h = [];
var h2 = [];
var showTotal = document.getElementById("display");
var showHistory = document.getElementById("history");
var showOperator = document.getElementById("operator");

var math_it_up = {
  "+": function(x, y) {
    return x + y;
  },
  "-": function(x, y) {
    return x - y;
  },
  "*": function(x, y) {
    return x * y;
  },
  "/": function(x, y) {
    return x / y;
  }
};

function setValue(n) {
  if (input === "0" && n === "0") {
    return (display.innerText = 0);
  }
  if (input === null) input = "";
  initialize = true;
  input += n;
  display.innerText = input;

  console.log("=====Set Value ====");
  console.log("input: " + input);
  console.log("total: " + total);
  console.log("operator: " + operator);
  console.log(h2);
  console.log("=====Set Value ====");
}

function setOperator(o) {
  if (input === null) return;
  if (initialize) {
    if (operator === "") {
      h2.push(Number(input));
    } else {
      h2.push(operator, Number(input));
      calculate();
    }
    input = "";
    initialize = false;
  }
  operator = o;
  showHistory.innerText = h2.join(" ");
  showOperator.innerText = " " + operator;

  console.log("=====Set Operator ====");
  console.log("input: " + input);
  console.log("total: " + total);
  console.log("operator: " + operator);
  console.log(h2);
  console.log("=====Set Operator ====");
}

function equal() {
  if (operator !== "") {
    calculate();
  }
  console.log("=====equal ====");
  console.log("input: " + input);
  console.log("total: " + total);
  console.log("operator: " + operator);
  console.log(h2);
  console.log("=====equal ====");
}

function calculate() {
  num1 = h2[h2.length - 1];
  num2 = input === "" ? num1 : Number(input);
  total = math_it_up[operator](num1, num2);
  showTotal.innerText = total;

  console.log("===== Calculate ====");
  console.log("input: " + input);
  console.log("total: " + total);
  console.log("operator: " + operator);
  console.log(h2);
  console.log("===== Calculate ====");
}

// function operation() {
//   if (initialize) {
//     total = Number(input);
//     input = "0";
//     initialize = false;
//   }
//   h.push({ o: operator, n: total });

//   var acc = h[0].n;
//   var historyLog = h[0].n + " " + operator;
//   for (var i = 1; i < h.length; i++) {
//     total = math_it_up[h[i - 1].o](acc, h[i].n);
//     var addHistory = "";
//     addHistory = " " + h[i].n + " " + operator;
//     acc = total;
//     historyLog += addHistory;
//   }

//   showTotal.innerText = acc;

//   h = [];
//   showHistory.innerText = historyLog;
//   input = "0";
// }

function ce() {
  h = [];
  h2 = [];
  input = null;
  operator = "";
  total = 0;
  showHistory.innerText = "";
  showOperator.innerText = "";
  showTotal.innerText = "0";
}

function c() {
  input = "";
  showTotal.innerText = "0";
}
