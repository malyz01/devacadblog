document.onkeydown = function(e) {
  if (checkDigit.includes(e.key)) {
    setValue(e.key);
  }
  if (checkOperators.includes(e.key)) {
    var o = e.key;
    if (e.key === "/") o = "÷";
    setOperator(o);
  }
  if (e.key === "Backspace") c();
  if (e.key === "NumpadEnter" || e.key === "Enter") equal();
};

function setValue(n) {
  if (input === "0" && n === "0") {
    return (display.innerText = 0);
  }
  if (input === null) input = "";
  if (input.includes(".") && n === ".") return;
  if (n === "." && input === "") input = "0";
  if (reset) {
    input = "";
    reset = false;
  }
  initialize = true;
  if (input.includes(".")) {
    if (input.length < 17) input += n;
  } else {
    if (input.length < 16) input += n;
  }
  showTotal.innerText = d(input);
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

function opposite() {
  if (input === null) return;
  input = String(Number(input) * -1);
  showTotal.innerText = d(input);
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
  showTotal.innerText = d(total);
}

function ce() {
  h = [];
  input = null;
  showTotal.innerText = "0";
  setInitial();
}

function c() {
  input = "0";
  showTotal.innerText = "0";
}

function setInitial() {
  operator = "";
  total = 0;
  showHistory.innerText = "";
  showOperator.innerText = "";
}

function d(x) {
  if (Number(x) === 0) return x;
  return Number(x).toLocaleString("en", { maximumFractionDigits: 16 });
}
