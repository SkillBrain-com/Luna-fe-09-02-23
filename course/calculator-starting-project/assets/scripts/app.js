const defaultResult = 0;
let currentResult = defaultResult;

const CALC_TYPE_ADD = "ADD";
const CALC_TYPE_SUBTRACT = "SUBTRACT";
const CALC_TYPE_MULTIPLY = "MULTIPLY";
const CALC_TYPE_DIVIDE = "DIVIDE";
let logEntries = [];

function createOutputDescription(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function getUserNumber() {
  return +userInput.value;
}


function createAndWriteLog(operation, prevResult, operationNumber, newResult){
  const logEntry = {
    operation,
    prevResult,
    operationNumber,
    newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculateType) {
  const initialResult = getUserNumber();
  const enteredNumber = +userInput.value;

  if (
    (calculateType !== CALC_TYPE_ADD &&
      calculateType !== CALC_TYPE_SUBTRACT &&
      calculateType !== CALC_TYPE_MULTIPLY &&
      calculateType !== CALC_TYPE_DIVIDE) ||
    !enteredNumber
  ) {
    return;
  }

  let mathOperator;
  if (calculateType === CALC_TYPE_ADD) {
    currentResult = currentResult + enteredNumber;
    mathOperator = "+";
  } else if (calculateType === CALC_TYPE_SUBTRACT) {
    currentResult = currentResult - enteredNumber;
    mathOperator = "-";
  } else if (calculateType === CALC_TYPE_MULTIPLY) {
    currentResult = currentResult * enteredNumber;
    mathOperator = "*";
  } else if (calculateType === CALC_TYPE_DIVIDE) {
    currentResult = currentResult / enteredNumber;
    mathOperator = "/";
  }

  createAndWriteLog(mathOperator, initialResult, enteredNumber,currentResult);
  createOutputDescription(mathOperator, initialResult, enteredNumber);
}

function add() {
  calculateResult(CALC_TYPE_ADD);
}

function subtract() {
  calculateResult(CALC_TYPE_SUBTRACT);
}

function multiply() {
  calculateResult(CALC_TYPE_MULTIPLY);
}

function divide() {
  calculateResult(CALC_TYPE_DIVIDE);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
