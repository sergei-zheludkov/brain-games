/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import * as lib from '../lib/lib';
import cycleOfQuestions from '../index';

const question = () => readlineSync.question('You answer: ');

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

const checkingUserResponseProgression = () => () => {
  const number = lib.getRandomInt(10);
  const randomStepProgression = lib.getRandomInt(9) + 1;
  const randomShadowNumber = lib.getRandomInt(9) + 1;
  const questionToUser = progerssion(number, randomStepProgression, randomShadowNumber);
  console.log(`Question: ${questionToUser[0]}`);
  const userAnswer = question();
  let result;
  const correctAnswer = questionToUser[1];

  if (Number(userAnswer) === questionToUser[1]) {
    result = true;
  }
  if (Number(userAnswer) !== questionToUser[1]) {
    result = false;
  }

  return [result, userAnswer, correctAnswer];
};

export const callGameProgression = () => cycleOfQuestions(checkingUserResponseProgression(), 'progression');
