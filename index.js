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
  $(button).click(function (e) {
    e.preventDefault();
    if (operator === "") {
      result = "";
    }

    if (currentNumber.length < 9) {
      currentNumber += index;
    }
    displayNumber.text(currentNumber);
  });
});

$(document).keydown(function (e) {
  const keyPressed = e.which;
  const numberKeys = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
  const keyIndex = numberKeys.indexOf(keyPressed);

  if (keyIndex !== -1 && currentNumber.length < 9) {
    e.preventDefault();
    if (operator === "") {
      result = "";
    }

    currentNumber += keyIndex.toString();
    displayNumber.text(currentNumber);
  }
});



decimal.click(function (e) {
  e.preventDefault();
  if (!currentNumber.includes('.') && currentNumber !== "") {
    currentNumber += '.';
    displayNumber.text(currentNumber);
  } else {
    currentNumber += '0.';
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
    if (result % 1 === 0) {
      result = result.toString();
    } else {
      result = result.toFixed(3);
    }
    displayNumber.text(result);
  } else if (result === "") {
    result = currentNumber;
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

    if (result % 1 === 0) {
      result = result.toString();
    } else {
      result = convertToExponential(result)
      console.log(result);
      result = result.toFixed(3);
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
    currentNumber = negateNumber(currentNumber);
    displayNumber.text(currentNumber);
  }
  if (result !== "") {
    result = negateNumber(result);
    displayNumber.text(result);
  }
});

function negateNumber(number) {
  return (parseFloat(number) * -1).toString();
}



