const zero = $("#zero");
const numberOne = $("#one");
const numberTwo = $("#two");
const numberThree = $("#three");
const numberFour = $("#four");
const numberFive = $("#five");
const numberSix = $("#six");
const numberSeven = $("#seven");
const numberEight = $("#eight");
const numberNine = $("#nine");
const addition = $("#addition");
const equal = $("#equals");
const subtraction = $("#substracion");
const clear = $("#clear");
const decimal = $("#decimal");
const multiplication = $("#multiplication");
const division = $("#division");
const displayNumber = $(".number-display-some");

const numberButtons = [
  zero, numberOne, numberTwo, numberThree,
  numberFour, numberFive, numberSix,
  numberSeven, numberEight, numberNine
];

let operator = "";
let result = "";
let currentNumber = "";
let isNegative = false;

numberButtons.forEach((button, index) => {
  button.click(function (e) {
    e.preventDefault();
    if (operator === "") {
      result = ""
    }
    if (currentNumber.length < 9) {
      currentNumber += index;
      displayNumber.text(currentNumber);

      if (currentNumber.length > 6) {
        displayNumber.css('font-size', '60px');
      } else if (currentNumber.length < 6) {
        displayNumber.css('font-size', '70px');
      }
    }
  });
});

decimal.click(function (e) {
  e.preventDefault();
  if (!currentNumber.includes('.') && currentNumber !== "") {
    currentNumber += '.';
    displayNumber.text(currentNumber);
    }
});

equal.click(function (e) {
  e.preventDefault();
  equalCalculations();
  displayNumber.text(result);
  currentNumber = "";
  operator = "";
});

addition.click(function (e) {
  e.preventDefault();
  performCalculation("+");
});

subtraction.click(function (e) {
  e.preventDefault();
  performCalculation("-");
});

multiplication.click(function (e) {
  e.preventDefault();
  performCalculation("x");
});

division.click(function (e) {
  e.preventDefault();
  performCalculation("/");
});

function performCalculation(op) {
  counterSome();
  currentNumber = "";
  operator = op;
}

function counterSome() {
  if (result !== "" && currentNumber !== "") {
    if (operator === "+") {
      result = Number(result) + Number(currentNumber);
    } else if (operator === "-") {
      result = Number(result) - Number(currentNumber);
    } else if (operator === "x") {
      result = Number(result) * Number(currentNumber);
    } else if (operator === "/") {
      result = Number(result) / Number(currentNumber);
    }
    displayNumber.text(result);
  } else if (result === "") {
    result = Number(currentNumber);
    displayNumber.text(result);
  }
}

function equalCalculations() {
  if (operator && currentNumber !== "") {
    if (operator === "+") {
      result = Number(result) + Number(currentNumber);
    } else if (operator === "-") {
      result = Number(result) - Number(currentNumber);
    } else if (operator === "x") {
      result = Number(result) * Number(currentNumber);
    } else if (operator === "/") {
      result = Number(result) / Number(currentNumber);
    }
  } else if (result === "") {
    result = currentNumber;
  }
}

clear.click(function (e) {
  e.preventDefault();
  currentNumber = "";
  result = "";
  operator = "";
  displayNumber.text("0");
  displayNumber.css('font-size', '70px');
});


$("#del").click(function (e) {
  e.preventDefault();

  if (currentNumber.length > 0) {
    currentNumber = currentNumber.slice(0, -1);
    displayNumber.text(currentNumber);
  }
});

$("#sign").click(function (e) {
  e.preventDefault();

  if (currentNumber !== "") {
    isNegative = !isNegative;
    currentNumber = isNegative ? "-" + currentNumber : currentNumber.replace("-", "");
    displayNumber.text(currentNumber);
  }
});

