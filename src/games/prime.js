import readlineSync from 'readline-sync';
import * as lib from '../lib/lib';
import cycleOfQuestions from '../index';

const question = () => readlineSync.question('You answer: ');

const isPrime = (number) => {
  const divider = Math.ceil(number / 2);

  const iter = (num, div) => {
    if (div === 1) {
      return true;
    }
    if (num % div === 0) {
      return false;
    }
    return iter(num, div - 1);
  };

  return iter(number, divider);
};

const checkingUserResponsePrime = () => () => {
  const number = lib.getRandomInt(100) + 1;
  const resultIsPrime = isPrime(number);
  console.log(`Question: ${number}`);
  const userAnswer = question();
  let result;
  let correctAnswer;

  if ((userAnswer === 'yes' && resultIsPrime === true) || (userAnswer === 'no' && resultIsPrime === false)) {
    result = true;  
  }
  if (userAnswer !== 'yes' && resultIsPrime === true) {
    result = false;
    correctAnswer = 'yes';
  } if (userAnswer !== 'no' && resultIsPrime === false) {
    result = false;
    correctAnswer = 'no';
  }

  return [result, userAnswer, correctAnswer];
};

const callGamePrime = () => cycleOfQuestions(checkingUserResponsePrime(), 'prime');

export default callGamePrime();
