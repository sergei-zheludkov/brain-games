/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import * as lib from '../lib/lib';
import cycleOfQuestions from '../index';

const question = () => readlineSync.question('You answer: ');

const greatestCommonDivisor = (a, b) => {
  let result;

  if (a % b === 0) {
    result = b;
  } else {
    result = greatestCommonDivisor(b, a % b);
  }

  return result;
};

const checkingUserResponseGcd = () => () => {
  let result;
  let correctAnswer;
  const number1 = lib.getRandomInt(100) + 1;
  const number2 = lib.getRandomInt(100) + 1;

  if (number1 > number2) {
    correctAnswer = greatestCommonDivisor(number1, number2);
  } else {
    correctAnswer = greatestCommonDivisor(number2, number1);
  }

  console.log(`Question: ${number1} ${number2}`);
  const userAnswer = question();

  if (Number(userAnswer) === correctAnswer) {
    result = true;
  }
  if (Number(userAnswer) !== correctAnswer) {
    result = false;
  }

  return [result, userAnswer, correctAnswer];
};

export const callGameGcd = () => cycleOfQuestions(checkingUserResponseGcd(), 'gcd');
