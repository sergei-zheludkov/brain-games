#!/usr/bin/env node
import * as lib from '../lib/lib';

const randomOperation = (operand1) => (operand2) => {
  const random = lib.getRandomInt(3);
  let answer;
  let result;

  switch (random) {
    case 0:
      answer = `${operand1} + ${operand2}`;
      result = operand1 + operand2;
      break;

    case 1:
      answer = `${operand1} - ${operand2}`;
      result = operand1 - operand2;
      break;

    case 2:
      answer = `${operand1} * ${operand2}`;
      result = operand1 * operand2;
      break;

    default:
      return console.log('GameName Error "Random operation"');
  }

  return [answer, result];
};

const checkingUserResponseCalc = (number1) => (number2) => {
  const quest = randomOperation(number1)(number2);
  console.log(`Question: ${quest[0]}`);
  const message = lib.question();

  if (Number(message) === quest[1]) {
    console.log('Correct!');
  }
  if (Number(message) !== quest[1]) {
    console.log(`'${message}' is wrong answer ;(. Correct answer was '${quest[1]}'.`);
    return false;
  }
  return true;
};

export default checkingUserResponseCalc;
