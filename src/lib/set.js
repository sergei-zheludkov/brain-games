#!/usr/bin/env node
import checkingUserResponseEven from '../games/even';
import checkingUserResponseCalc from '../games/calc';
import checkingUserResponseGcd from '../games/gcd';
import checkingUserResponseProgression from '../games/progression';
import * as lib from './lib';


export const gameDescription = (gameName) => {
  let description;
  switch (gameName) {
    case 'even':
      description = 'Answer "yes" if the number is even, otherwise answer "no"';
      break;

    case 'calc':
      description = 'What is the result of the expression?';
      break;

    case 'gcd':
      description = 'Find the greatest common divisor of given numbers';
      break;

    case 'progression':
      description = 'What number is missing in the progression?';
      break;

    default:
      return console.log('GameName Error "Description"');
  }
  return description;
};

export const gameCall = (gameName) => {
  switch (gameName) {
    case 'even':
      return checkingUserResponseEven(lib.getRandomInt(100) + 1);

    case 'calc':
      return checkingUserResponseCalc(lib.getRandomInt(100))(lib.getRandomInt(100));

    case 'gcd':
      return checkingUserResponseGcd(lib.getRandomInt(100) + 1)(lib.getRandomInt(100) + 1);

    case 'progression':
      return checkingUserResponseProgression(lib.getRandomInt(10));

    default:
      return console.log('GameName Error "Call"');
  }
};
