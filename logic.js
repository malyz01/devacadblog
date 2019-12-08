var input = null;
var operator = "";
var num1 = "";
var num2 = "";
var total = 0;
var initialize = false;
var reset = false;
var h = [];
var showTotal = document.getElementById("display");
var showHistory = document.getElementById("history");
var showOperator = document.getElementById("operator");
var checkDigit = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
var checkOperators = ["+", "-", "*", "/"];

document.onkeydown = function(e) {
  if (checkDigit.includes(e.key)) {
    setValue(e.key);
  }
  if (checkOperators.includes(e.key)) {
    setOperator(e.key);
  }
  if (e.key === "Backspace") c();
  if (e.key === "NumpadEnter" || e.key === "Enter") equal();
};

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
  if (input.includes(".") && n === ".") return;
  if (reset) {
    input = "";
    reset = false;
  }
  initialize = true;
  input += n;
  display.innerText = input;
}

function setOperator(o) {
  if (input === null) return;
  if (initialize) {
    if (operator === "") {
      h.push(Number(input));
    } else {
      calculate();
      h.push(operator, Number(input));
    }
    input = "";
    initialize = false;
  }
  operator = o;
  showHistory.innerText = h.join(" ");
  showOperator.innerText = " " + operator;
}

function equal() {
  if (operator !== "") {
    calculate();
    h = [];
    input = String(total);
    reset = true;
    initialize = true;
    setInitial();
  }
}

function calculate() {
  num1 = total === 0 ? h[h.length - 1] : total;
  num2 = input === "" ? num1 : Number(input);
  total = math_it_up[operator](num1, num2);
  showTotal.innerText = total;
}

function ce() {
  h = [];
  input = null;
  showTotal.innerText = "0";
  setInitial();
}

function c() {
  input = "";
  showTotal.innerText = "0";
}

function setInitial() {
  operator = "";
  total = 0;
  showHistory.innerText = "";
  showOperator.innerText = "";
}
