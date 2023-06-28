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
const decimal = $("#decimal")
const percent = $("#percent")
const multiplication = $("#multiplication")
const division = $("#division")
const displayNumber = $(".number-display-some");

const numberButtons = [
  zero, numberOne, numberTwo, numberThree,
  numberFour, numberFive, numberSix,
  numberSeven, numberEight, numberNine
];

let operator = "";
let result = 0;
let currentNumber = 0;

numberButtons.forEach((button, index) => {
  button.click(function(e) {
    e.preventDefault();

    if (currentNumber < 100000000) {
      currentNumber = currentNumber * 10 + index;
      displayNumber.text(currentNumber);

      if (currentNumber > 999999) {
        displayNumber.css('font-size', '60px');
      }
    }
  });
});

equal.click(function(e) {
  e.preventDefault();
  equalCalcualtions();
  displayNumber.text(result);
  currentNumber = 0;
  operator = "";
});

addition.click(function(e) {
  e.preventDefault();
  performCalculation("+");
});

subtraction.click(function(e) {
  e.preventDefault();
  performCalculation("-");
});

multiplication.click(function(e) {
  e.preventDefault();
  performCalculation("x");
});

division.click(function(e) {
  e.preventDefault();
  performCalculation("/");
});

function performCalculation(op) {
  counterSome();
  currentNumber = 0;
  operator = op;
}

function counterSome() {
  if (result !== 0 && currentNumber !== 0) {
    if (operator === "+") {
      result += currentNumber;
    } else if (operator === "-") {
      result -= currentNumber;
    } else if (operator === "x") {
      result *= currentNumber;
    } else if (operator === "/") {
      result /= currentNumber;
    }
    displayNumber.text(result);
  } else if (result === 0) {
    result = currentNumber;
    displayNumber.text(result);
  }
}

function equalCalcualtions() {
  if (operator && currentNumber !== 0) {
    if (operator === "+") {
      result += currentNumber;
    } else if (operator === "-") {
      result -= currentNumber;
    } else if (operator === "x") {
      result *= currentNumber;
    } else if (operator === "/") {
      result /= currentNumber;
    }
  } else if (result === 0) {
    result = currentNumber;
  }
}

clear.click(function (e) { 
    e.preventDefault();
    currentNumber = 0;
    result = 0;
    operator = "";
    displayNumber.text("0");
});

decimal.click(function (e) {
  e.preventDefault();
  

});

percent.click(function (e) {
  e.preventDefault();
  console.log(result + " vysledek");
  console.log(currentNumber + " psane");
});
