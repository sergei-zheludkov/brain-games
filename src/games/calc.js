import readlineSync from 'readline-sync';
import * as lib from '../lib/lib';
import cycleOfQuestions from '../index';

const question = () => readlineSync.question('You answer: ');

const randomOperation = (operand1, operand2) => {
  const random = lib.getRandomInt(3);
  let question;
  let resultOfOperation;

  switch (random) {
    case 0:
      question = `${operand1} + ${operand2}`;
      resultOfOperation = operand1 + operand2;
      break;

    case 1:
      question = `${operand1} - ${operand2}`;
      resultOfOperation = operand1 - operand2;
      break;

    case 2:
      question = `${operand1} * ${operand2}`;
      resultOfOperation = operand1 * operand2;
      break;

    default:
      return console.log('GameName Error "Random operation"');
  }

  return [question, resultOfOperation];
};

const checkingUserResponseCalc = () => () => {
  const number1 = lib.getRandomInt(100);
  const number2 = lib.getRandomInt(100);
  const questionToUser = randomOperation(number1, number2);
  console.log(`Question: ${questionToUser[0]}`);
  const userAnswer = question();
  let result;
  let correctAnswer;
  
  if (Number(userAnswer) === questionToUser[1]) {
    result = true;
  }
  if (Number(userAnswer) !== questionToUser[1]) {
    correctAnswer = questionToUser[1];
    result = false;
  }

  return [result, userAnswer, correctAnswer];
};

const callGameCalc = () => cycleOfQuestions(checkingUserResponseCalc(), 'calc');

export default callGameCalc();
