#!/usr/bin/env node
import * as lib from '../lib/lib';

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

const checkingUserResponseCalc = (number1, number2) => {
  const questionToUser = randomOperation(number1, number2);
  console.log(`Question: ${questionToUser[0]}`);
  const userAnswer = lib.question();

  if (Number(userAnswer) === questionToUser[1]) {
    console.log('Correct!');
  }
  if (Number(userAnswer) !== questionToUser[1]) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${questionToUser[1]}'.`);
    return false;
  }

  return true;
};

export default checkingUserResponseCalc;
