/* eslint-disable import/prefer-default-export */
import getRandomInt from '../lib/lib';
import cycleOfQuestions from '../index';

const description = 'What number is missing in the progression?';

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

const checkingUserResponseProgr = () => () => {
  const number = getRandomInt(10);
  const randomStepProgression = getRandomInt(9) + 1;
  const randomShadowNumber = getRandomInt(9) + 1;
  const operation = progerssion(number, randomStepProgression, randomShadowNumber);
  const questionToUser = operation[0];
  const correctAnswer = operation[1];

  return [questionToUser, String(correctAnswer)];
};

export const callGameProgression = () => cycleOfQuestions(checkingUserResponseProgr(), description);
