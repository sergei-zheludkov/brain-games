import getRandomInt from '../lib/lib';
import cycleOfQuestions from '../index';

const description = 'Find the greatest common divisor of given numbers';
const min = 1;
const max = 100;

const getGreatestCommonDivisor = (a, b) => {
  let result;

  if (a % b === 0) {
    result = b;
  } else {
    result = getGreatestCommonDivisor(b, a % b);
  }

  return result;
};

const getQuestAndAnsw = () => {
  let correctAnswer;
  const number1 = getRandomInt(min, max);
  const number2 = getRandomInt(min, max);
  const questionToUser = `${number1}  ${number2}`;

  if (number1 > number2) {
    correctAnswer = getGreatestCommonDivisor(number1, number2);
  } else {
    correctAnswer = getGreatestCommonDivisor(number2, number1);
  }

  return [questionToUser, String(correctAnswer)];
};

const callGameGcd = () => cycleOfQuestions(getQuestAndAnsw, description);
export default callGameGcd;
