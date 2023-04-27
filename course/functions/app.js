const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";

const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER_WIN";
const RESULT_COPMUTER_WIN = "COMPUTER_WIN";

const DEFAULT_SELECTION = ROCK;
let gameIsRuning = false;

const getPlayerChoise = () => {
  const selection = prompt(`${ROCK}, ${SCISSOR}, ${PAPER}`, "").toUpperCase();

  //   if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
  //     alert(`Invalide choice! We chose ${DEFAULT_SELECTION} for you`);
  //     return DEFAULT_SELECTION;
  //   }

  return selection;
};

const getComputerChoise = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};

const getWinner = (cChoice, pChoise = DEFAULT_SELECTION) => {
  console.log(pChoise);
  return cChoice === pChoise
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoise === PAPER) ||
      (cChoice === PAPER && pChoise === SCISSOR) ||
      (cChoice === SCISSOR && pChoise === ROCK)
    ? RESULT_PLAYER_WIN
    : RESULT_COPMUTER_WIN;
};

// if (cChoice === pChoise) {
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === ROCK && pChoise === PAPER) ||
//     (cChoice === PAPER && pChoise === SCISSOR) ||
//     (cChoice === SCISSOR && pChoise === ROCK)
//   ) {
//     return RESULT_PLAYER_WIN;
//   } else {
//     return RESULT_COPMUTER_WIN;
//   }

// function initGame() {
//   if (gameIsRuning) {
//     return;
//   }

//   gameIsRuning = true;

//   const playerChoise = getPlayerChoise();
//   const computerChoise = getComputerChoise();
//   const winner = getWinner(computerChoise, playerChoise);

//   let message = `You picked ${playerChoise}, computer picked ${computerChoise}, you`;

//   if (winner === RESULT_DRAW) {
//     message = message + " had a draw";
//   } else if (winner === RESULT_PLAYER_WIN) {
//     message = message + " won";
//   } else if (winner === RESULT_COPMUTER_WIN) {
//     message = message + " lost";
//   }

//   alert(message);
//   gameIsRuning = false;
// }

startGameBtn.addEventListener("click", () => {
  if (gameIsRuning) {
    return;
  }

  const playerChoise = getPlayerChoise();
  const computerChoise = getComputerChoise();

  let winner;

  if (playerChoise) {
    winner = getWinner(computerChoise, playerChoise);
  } else {
    winner = getWinner(computerChoise);
  }

  let message = `You picked ${
    playerChoise || DEFAULT_SELECTION
  }, computer picked ${computerChoise}, you`;

  if (winner === RESULT_DRAW) {
    message = message + " had a draw";
  } else if (winner === RESULT_PLAYER_WIN) {
    message = message + " won";
  } else if (winner === RESULT_COPMUTER_WIN) {
    message = message + " lost";
  }

  alert(message);
  gameIsRuning = false;
});

// not related to game

//Function expression

// const functionMultiply = function (a, b) {
//     return a * b;
// };

// // console.log(functionMultiply(2, 5));

// //Arrow function
// const add = function (a,b) {
//     return a + b;
// }

// const add1 = (value,value2) => console.log(value, value2);

// add1(2, 3);

// let nume = 'Costea';
// // function greate(greateMessage) {
// //     const result = greateMessage + nume;
// //     return result;
// // }
// const greate = function (greateMessage) {
//     const nume1 = 'Andrii';
//     const result = greateMessage;
//     return result;
// }

// const firstGreate = greate('Salut ');
// const secondGreate = greate('Hi ');


const combine = (operation, ...numbers) => {
  const showResult = (messageText) => {
    alert(messageText + sum);
  };

  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;

  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }

  return showResult;
};

const resul1 = combine("ADD", 1, 2);
const result2 = combine("SUBTRACT", 2, 1);
console.dir(resul1);
console.dir(result2);
// resul1('rezultatul la adunare: ');
// result2('rezultatul la scadere: ');


// function addNumber(num1) {
//   return num1 + Math.random();
// }

// console.log(addNumber(11));
// console.log(addNumber(11));
// console.log(addNumber(11));
// console.log(addNumber(11));

// let previousResult = 0;


// function addMoreNumber(num1,num2) {
//   const sum = num1 + num2;
//   previousResult = sum;
//   return sum
// }

// console.log(previousResult + ' Before function');
// console.log(addMoreNumber(2,3));
// console.log(previousResult + 'After function');

// const createObject = (num,age,hoby) => {
//   return {
//     nume:num,
//     virsta: age,
//     interese: hoby
//   }
// };

// console.log(createObject('Costea', 23, ['sport']));


let a = 10;
function b() {
  a = 20;
}
b();
console.log(a);