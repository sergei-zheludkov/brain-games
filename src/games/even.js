#!/usr/bin/env node
import * as lib from '../lib/lib';

const checkingUserResponseEven = (number) => {
  console.log(`Question: ${number}`);
  const message = lib.question();

  if ((number % 2 === 0 && message === 'yes') || (number % 2 !== 0 && message === 'no')) {
    console.log('Correct!');
  }
  if (number % 2 === 0 && message !== 'yes') {
    console.log(`'${message}' is wrong answer ;(. Correct answer was 'yes'.`);
    return false;
  } if (number % 2 !== 0 && message !== 'no') {
    console.log(`'${message}' is wrong answer ;(. Correct answer was 'no'.`);
    return false;
  }

  return true;
};

export default checkingUserResponseEven;
