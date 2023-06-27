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
const displayNumber = $(".number-display-some");
const subtraction = $("#substracion");
const clear = $("#clear");
const decimal = $("#decimal")

let currentNumber = "";
let result = 0;

const numberButtons = [
  zero, numberOne, numberTwo, numberThree,
  numberFour, numberFive, numberSix,
  numberSeven, numberEight, numberNine
];

numberButtons.forEach((button, index) => {
    button.click(function(e) {
      e.preventDefault();
      currentNumber += index.toString();
      displayNumber.text(currentNumber);
    });
  });

  equal.click(function(e) {
    e.preventDefault();

  });
  
  addition.click(function(e) {
    e.preventDefault();
    result = Number(currentNumber) + Number(result)
    displayNumber.text(result)
    currentNumber = ""
  });
  
  subtraction.click(function(e) {
    e.preventDefault();
    result = currentNumber
    if (result !== "") {
        result = (Number(result) - Number(currentNumber))
        displayNumber.text(result)
    }
    currentNumber = ""
  });

decimal.click(function (e) { 
    e.preventDefault();
    console.log(currentNumber);
});

clear.click(function (e) { 
    e.preventDefault();
    currentNumber = "";
    result = 0;
    displayNumber.text("0");
});
