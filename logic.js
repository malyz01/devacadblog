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

function setValue(n) {
  if (input === "0" && n === "0") {
    return (display.innerText = 0);
  }
  if (input === null) input = "";
  if (input.includes(".") && n === ".") return;
  if (n === ".") input = "0";
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

function opposite() {
  if (input === null) return;
  input = String(Number(input) * -1);
  showTotal.innerText = input;
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
