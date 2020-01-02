#!/usr/bin/env node
import * as lib from '../lib/lib';

const greatestCommonDivisor = (a, b) => {
  let result;

  if (a % b === 0) {
    result = b;
  } else {
    result = greatestCommonDivisor(b, a % b);
  }

  return result;
};

const checkingUserResponseGcd = (number1, number2) => {
  let result;

  if (number1 > number2) {
    result = greatestCommonDivisor(number1, number2);
  } else {
    result = greatestCommonDivisor(number2, number1);
  }

  console.log(`Question: ${number1} ${number2}`);
  const userAnswer = lib.question();

  if (Number(userAnswer) === result) {
    console.log('Correct!');
  }
  if (Number(userAnswer) !== result) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
    return false;
  }

  return true;
};

export default checkingUserResponseGcd;
