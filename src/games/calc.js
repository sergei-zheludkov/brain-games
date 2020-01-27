/* eslint-disable import/prefer-default-export */
import getRandomInt from '../lib/lib';
import cycleOfQuestions from '../index';

const description = 'What is the result of the expression?';

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

const checkingUserResponseCalc = () => () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  const operations = '+-*';
  const randomOperator = operations[getRandomInt(operations.length - 1)];
  const operation = randomOperation(randomOperator, number1, number2);
  const questionToUser = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = operation;

  return [questionToUser, String(correctAnswer)];
};

export const callGameCalc = () => cycleOfQuestions(checkingUserResponseCalc(), description);
