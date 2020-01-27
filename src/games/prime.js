/* eslint-disable import/prefer-default-export */
import getRandomInt from '../lib/lib';
import cycleOfQuestions from '../index';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const divider = Math.ceil(number / 2);

  const iter = (num, div) => {
    if (div === 1) {
      return 'yes';
    }
    if (num % div === 0) {
      return 'no';
    }
    return iter(num, div - 1);
  };

  return iter(number, divider);
};


const checkingUserResponsePrime = () => () => {
  const questionToUser = getRandomInt(100) + 1;
  const correctAnswer = isPrime(questionToUser);

  return [questionToUser, correctAnswer];
};

export const callGamePrime = () => cycleOfQuestions(checkingUserResponsePrime(), description);
