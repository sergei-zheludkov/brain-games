/* eslint-disable import/prefer-default-export */
import getRandomInt from '../lib/lib';
import cycleOfQuestions from '../index';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => {
  let answer;

  if (number % 2 === 0) {
    answer = 'yes';
  }
  if (number % 2 !== 0) {
    answer = 'no';
  }

  return answer;
};

const checkingUserResponseEven = () => () => {
  const questionToUser = getRandomInt(100) + 1;
  const correctAnswer = isEven(questionToUser);

  return [questionToUser, correctAnswer];
};

export const callGameEven = () => cycleOfQuestions(checkingUserResponseEven(), description);
