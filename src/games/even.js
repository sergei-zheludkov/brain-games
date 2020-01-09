import readlineSync from 'readline-sync';
import * as lib from '../lib/lib';
import cycleOfQuestions from '../index';

const question = () => readlineSync.question('You answer: ');
 
const checkingUserResponseEven = () => () => {
  const random = () => lib.getRandomInt(100) + 1;
  const number = random();
  console.log(`Question: ${number}`);
  const userAnswer = question();
  let result;
  let correctAnswer;

  if ((number % 2 === 0 && userAnswer === 'yes') || (number % 2 !== 0 && userAnswer === 'no')) {
    result = true;
  }
  if (number % 2 === 0 && userAnswer !== 'yes') {
    result = false;
    correctAnswer = 'yes';
  } if (number % 2 !== 0 && userAnswer !== 'no') {
    result = false;
    correctAnswer = 'no';
  }

  return [result, userAnswer, correctAnswer];
};

const callGameEven = () => cycleOfQuestions(checkingUserResponseEven(), 'even');

export default callGameEven();
