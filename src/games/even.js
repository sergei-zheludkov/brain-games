#!/usr/bin/env node
import * as lib from '../lib/lib';

const checkingUserResponseEven = (number) => {
  console.log(`Question: ${number}`);
  const answer = lib.question();

  if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
    console.log('Correct!');
  }
  if (number % 2 === 0 && answer !== 'yes') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
    return false;
  } if (number % 2 !== 0 && answer !== 'no') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
    return false;
  }

  return true;
};

export default checkingUserResponseEven;
