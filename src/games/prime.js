#!/usr/bin/env node
import * as lib from '../lib/lib';

const isPrime = (number) => {
  const divider = Math.ceil(number / 2);

  const iter = (num, div) => {
    if (div === 1) {
      return true;
    }
    if (num % div === 0) {
      return false;
    }
    return iter(num, div - 1);
  };

  return iter(number, divider);
};

const checkingUserResponsePrime = (number) => {
  const result = isPrime(number);
  console.log(`Question: ${number}`);
  const userAnswer = lib.question();

  if ((userAnswer === 'yes' && result === true) || (userAnswer === 'no' && result === false)) {
    console.log('Correct!');
  }
  if (userAnswer !== 'yes' && result === true) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
    return false;
  } if (userAnswer !== 'no' && result === false) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
    return false;
  }

  return true;
};

export default checkingUserResponsePrime;
