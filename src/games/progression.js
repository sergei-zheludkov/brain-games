#!/usr/bin/env node
import * as lib from '../lib/lib';

const progerssion = (startNumber, step, shadowNumber) => {
  let out = '';
  let result;
  let number = startNumber;

  for (let counter = 10; counter !== 0; counter -= 1) {
    if (counter === shadowNumber) {
      out += '.. ';
      number += step;
      result = number;
    } else {
      number += step;
      out += `${number} `;
    }
  }

  return [out, result];
};

const checkingUserResponseProgression = (number) => {
  const randomStepProgression = lib.getRandomInt(9) + 1;
  const randomShadowNumber = lib.getRandomInt(9) + 1;
  const questionToUser = progerssion(number, randomStepProgression, randomShadowNumber);
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

export default checkingUserResponseProgression;
