#!/usr/bin/env node
import checkingUserResponseEven from '../games/even';
import checkingUserResponseCalc from '../games/calc';
import * as lib from './lib';


export const gameDescription = (gameName) => {
  let greeting;
  switch (gameName) {
    case 'even':
      greeting = 'Answer "yes" if the number is even, otherwise answer "no"';
      break;

    case 'calc':
      greeting = 'What is the result of the expression?';
      break;

    default:
      return console.log('GameName Error "Description"');
  }
  return greeting;
};

export const gameCall = (gameName) => {
  switch (gameName) {
    case 'even':
      return checkingUserResponseEven(lib.numberRandom());

    case 'calc':
      return checkingUserResponseCalc(lib.numberRandom())(lib.numberRandom());

    default:
      return console.log('GameName Error "Call"');
  }
};
