function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecondNumber = false;

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "add":
      return add(firstNumber, secondNumber);
    case "substract":
      return substract(firstNumber, secondNumber);
    case "multiply":
      return multiply(firstNumber, secondNumber);
    case "divide":
      return divide(firstNumber, secondNumber);
    default:
      return 0;
  }
}

const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");

digitButtons.forEach((digit) => {
  digit.addEventListener("click", (e) => {
    const digitValue = e.target.id;

    if (isSecondNumber) {
      secondNumber += digitValue;
      display.textContent = Number.parseInt(secondNumber).toString();
    } else {
      firstNumber += digitValue;
      display.textContent = Number.parseInt(firstNumber).toString();
    }
  });
});

operatorButtons.forEach((op) => {
  op.addEventListener("click", (e) => {
    operator = e.target.id;

    if (isSecondNumber) {
      const solution = operate(
        Number.parseInt(firstNumber),
        Number.parseInt(secondNumber),
        operator
      );

      firstNumber = solution;
      secondNumber = "0";
      display.textContent = solution;
    } else {
      secondNumber = "0";
      isSecondNumber = true;
    }
  });
});

equalsButton.addEventListener("click", () => {
  const solution = operate(
    Number.parseInt(firstNumber),
    Number.parseInt(secondNumber),
    operator
  );

  display.textContent = solution;

  // Reset all inputs
  firstNumber = "";
  secondNumber = "";
  operator = "";
  isSecondNumber = false;
});

clearButton.addEventListener("click", () => {
  display.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  isSecondNumber = false;
});
