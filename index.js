const numberOne = $("#one");
const numberTwo = $("#two");
const numberThree = $("#three");
const addition = $("#addition");
const equal = $("#equals");
const displayNumber = $(".number-display-some");

let currentNumber = ""; // Define currentNumber outside the click event handlers
let a = ""; // Define a outside the addition click event handler

numberOne.click(function(e) {
  e.preventDefault();
  currentNumber += "1"; // Use += to concatenate the value
  displayNumber.text(currentNumber);
  console.log(currentNumber);
});

numberTwo.click(function(e) {
  e.preventDefault();
  currentNumber += "2";
  displayNumber.text(currentNumber);
  console.log(currentNumber);
});

numberThree.click(function(e) {
  e.preventDefault();
  currentNumber += "3";
  displayNumber.text(currentNumber);
  console.log(currentNumber);
});

addition.click(function(e) {
  e.preventDefault();
  a = currentNumber; // Assign the value of currentNumber to a
  currentNumber = ""; // Reset currentNumber for the next input
  displayNumber.empty();
});

equal.click(function(e) {
  e.preventDefault();
  if (a !== "" && currentNumber !== "") {
    let b = Number(a) + Number(currentNumber); // Convert strings to numbers for addition
    displayNumber.text(b);
    currentNumber = ""; // Reset currentNumber after performing addition
    a = ""; // Reset a for the next calculation
  }
});
