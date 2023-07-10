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
const sign = $("#sign");
const del = $("#del");

const numberButtons = [
  zero, numberOne, numberTwo, numberThree,
  numberFour, numberFive, numberSix,
  numberSeven, numberEight, numberNine
];

let operator = "";
let result = "";
let currentNumber = "";

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
  const numpadKeys = [96, 97, 98, 99, 100, 101, 102, 103, 104, 105];
  const keyIndex = numberKeys.indexOf(keyPressed);
  const numpadIndex = numpadKeys.indexOf(keyPressed);

  if (keyIndex !== -1 || numpadIndex !== -1 && currentNumber.length < 9) {
    e.preventDefault();
    if (operator === "") {
      result = "";
    }

    let digit = "";
    if (keyIndex !== -1 && currentNumber.length < 9) {
      digit = keyIndex.toString();
    } else {
      digit = numpadIndex.toString();
    }

    currentNumber += digit;
    displayNumber.text(currentNumber);
  }

  var key = e.keyCode || e.which;
  if (key === 107) {
    e.preventDefault();
    performCalculation("+");
    addition.addClass("blue-background");
    $(".color-change").not(addition).removeClass("blue-background");
  }
  if (key === 109) {
    e.preventDefault();
    performCalculation("-");
    subtraction.addClass("blue-background");
    $(".color-change").not(subtraction).removeClass("blue-background");
  }
  if (key === 106) {
    e.preventDefault();
    performCalculation("x");
    multiplication.addClass("blue-background");
    $(".color-change").not(multiplication).removeClass("blue-background");
  }
  if (key === 111) {
    e.preventDefault();
    performCalculation("/");
    division.addClass("blue-background");
    $(".color-change").not(division).removeClass("blue-background");
  }
  if (key === 13) {
    e.preventDefault();
    equalCalculations();
    currentNumber = "";
    operator = "";
    $(".color-change").removeClass("blue-background");
  }
});

decimal.click(function (e) {
  e.preventDefault();
  if (!currentNumber.includes('.') && currentNumber !== "") {
    currentNumber += '.';
    displayNumber.text(currentNumber);
  } else if (currentNumber === "") {
    currentNumber += '0.';
    displayNumber.text(currentNumber);
  }
});

equal.click(function (e) {
  e.preventDefault();
  equalCalculations();
  currentNumber = "";
  operator = "";
  $(".color-change").removeClass("blue-background");
});

addition.click(function (e) {
  e.preventDefault();
  performCalculation("+");
  
  addition.addClass("blue-background");
  $(".color-change").not(addition).removeClass("blue-background");
});

subtraction.click(function(e) {
  e.preventDefault();
  performCalculation("-");

  subtraction.addClass("blue-background");
  $(".color-change").not(subtraction).removeClass("blue-background");
});

multiplication.click(function(e) {
  e.preventDefault();
  performCalculation("x");

  multiplication.addClass("blue-background");
  $(".color-change").not(multiplication).removeClass("blue-background");
});

division.click(function(e) {
  e.preventDefault();
  performCalculation("/");
  division.addClass("blue-background");
  $(".color-change").not(division).removeClass("blue-background");
});

$(document).click(function(e) {
  if (!$(e.target).closest(".color-change").length) {
    $(".color-change").removeClass("blue-background");
  }
});

clear.click(function (e) {
  e.preventDefault();
  currentNumber = "";
  result = "";
  operator = "";
  displayNumber.text("0");
  displayNumber.css('font-size', '70px');
  $(".color-change").removeClass("blue-background");
});

sign.click(function (e) {
  e.preventDefault();

  if (currentNumber !== "") {
    currentNumber = (parseFloat(currentNumber) * -1).toString();
    displayNumber.text(currentNumber);
  }
  if (result !== "" && currentNumber === "") {
    result = (parseFloat(result) * -1).toString();
    displayNumber.text(result);
  }
});

del.click(function (e) {
  e.preventDefault();

  if (currentNumber.length > 0) {
    currentNumber = currentNumber.slice(0, -1);
    displayNumber.text(currentNumber);
  }
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

    if (result >= 1000000000) {
      if (result % 1000000000 === 0) {
        displayNumber.text((result / 1000000000).toFixed(1) + "e" + (Math.log10(result) + 9));
      } else {
        displayNumber.text(result.toExponential(1));
      }
    } else {
      displayNumber.text(result.toString());
    }
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

    if (result >= 1000000000) {
      if (result % 1000000000 === 0) {
        displayNumber.text((result / 1000000000).toFixed(1) + "e" + (Math.log10(result) + 9));
      } else {
        displayNumber.text(result.toExponential(1));
      }
    } else {
      result = result.toString();
      displayNumber.text(result);
    }

  } else if (result === "") {
    result = currentNumber;
  }
}





