#!/usr/bin/env node
import * as lib from '../lib/lib';

const divider = (a) => (b) => {
  let result = 0;
  if (a % b === 0) {
    result = b;
  } else {
    result = divider(b)(a % b);
  }
  return result;
};

const checkingUserResponseGcd = (number1) => (number2) => {
  let result;
  if (number1 > number2) {
    result = divider(number1)(number2);
  } else {
    result = divider(number2)(number1);
  }

  console.log(`Question: ${number1} ${number2}`);
  const message = lib.question();
  if (Number(message) === result) {
    console.log('Correct!');
  }
  if (Number(message) !== result) {
    console.log(`'${message}' is wrong answer ;(. Correct answer was '${result}'.`);
    return false;
  }
  return true;
};

export default checkingUserResponseGcd;
