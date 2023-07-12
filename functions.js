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
  
      if (result >= 1e9) {
        const power = Math.floor(Math.log10(result));
        displayNumber.text((result / Math.pow(10, power)).toFixed(1) + "e" + power);
      } else {
        displayNumber.text(result.toLocaleString());
      }
    } else if (result === "") {
      result = currentNumber;
      displayNumber.text(parseFloat(currentNumber).toLocaleString());
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
      if (result >= 1e9) {
        const power = Math.floor(Math.log10(result));
        displayNumber.text((result / Math.pow(10, power)).toFixed(1) + "e" + power);
      } else {
        displayNumber.text(result.toLocaleString());
      }
    } else if (result === "") {
      result = currentNumber;
    }
    currentNumber = ""
    operator = "";
  }