import getRandomInt from '../lib/lib';
import cycleOfQuestions from '../index';

const description = 'What is the result of the expression?';
const min = 1;
const max = 100;
const operations = '+-*';


const randomOperation = (operation, operand1, operand2) => {
  let resultOfOperation;

  switch (operation) {
    case '+':
      resultOfOperation = operand1 + operand2;
      break;

    case '-':
      resultOfOperation = operand1 - operand2;
      break;

    case '*':
      resultOfOperation = operand1 * operand2;
      break;

    default:
      return false;
  }

  return resultOfOperation;
};

const getQuestAndAnsw = () => {
  const number1 = getRandomInt(min, max);
  const number2 = getRandomInt(min, max);
  const randomOperator = operations[getRandomInt(0, operations.length)];
  const correctAnswer = randomOperation(randomOperator, number1, number2);
  const questionToUser = `${number1} ${randomOperator} ${number2}`;

  return [questionToUser, String(correctAnswer)];
};

const callGameCalc = () => cycleOfQuestions(getQuestAndAnsw, description);
export default callGameCalc;
