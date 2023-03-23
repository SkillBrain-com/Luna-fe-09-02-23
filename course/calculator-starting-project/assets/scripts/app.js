const defaultResult = 0;
let currentResult = defaultResult;

function createOutputDescription(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = +userInput.value;
  let initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createOutputDescription("+", initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = +userInput.value;
  let initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createOutputDescription("-", initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = +userInput.value;
  let initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createOutputDescription("*", initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = +userInput.value;
  let initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createOutputDescription("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

