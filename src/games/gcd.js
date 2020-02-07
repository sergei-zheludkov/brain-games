import getRandomInt from '../lib/lib';
import makeSeriesOfQuestions from '../index';

const description = 'Find the greatest common divisor of given numbers';
const min = 1;
const max = 100;

const getGreatestCommonDivisor = (a, b) => {
  let result;
  let bigger = a;
  let lesser = b;
  if (a < b) {
    [bigger, lesser] = [lesser, bigger];
  }
  if (bigger % lesser === 0) {
    result = lesser;
  } else {
    result = getGreatestCommonDivisor(lesser, bigger % lesser);
  }

  return result;
};

const getQuestAndAnsw = () => {
  const number1 = getRandomInt(min, max);
  const number2 = getRandomInt(min, max);
  const correctAnswer = getGreatestCommonDivisor(number1, number2);
  const questionToUser = `${number1}  ${number2}`;
  return [questionToUser, String(correctAnswer)];
};

const callGameGcd = () => makeSeriesOfQuestions(getQuestAndAnsw, description);
export default callGameGcd;
