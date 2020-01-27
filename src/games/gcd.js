/* eslint-disable import/prefer-default-export */
import getRandomInt from '../lib/lib';
import cycleOfQuestions from '../index';

const description = 'Find the greatest common divisor of given numbers';

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
  let correctAnswer;
  const number1 = getRandomInt(100) + 1;
  const number2 = getRandomInt(100) + 1;
  const questionToUser = `${number1}  ${number2}`;

  if (number1 > number2) {
    correctAnswer = greatestCommonDivisor(number1, number2);
  } else {
    correctAnswer = greatestCommonDivisor(number2, number1);
  }

  return [questionToUser, String(correctAnswer)];
};

export const callGameGcd = () => cycleOfQuestions(checkingUserResponseGcd(), description);
