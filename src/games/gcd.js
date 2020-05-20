import getRandomInt from '../lib/lib';
import makeSeriesOfQuestions from '../index';

const description = 'Find the greatest common divisor of given numbers';
const min = 1;
const max = 100;

const changePlace = (a, b) => ((a < b) ? [b, a] : [a, b]);

export const getGreatestCommonDivisor = (a, b) => {
  const [bigger, lesser] = changePlace(a, b);
  if (bigger % lesser === 0) {
    return lesser;
  }
  return getGreatestCommonDivisor(lesser, bigger % lesser);
};

const getQuestAndAnsw = () => {
  const number1 = getRandomInt(min, max);
  const number2 = getRandomInt(min, max);
  const correctAnswer = getGreatestCommonDivisor(number1, number2);
  const questionToUser = `${number1}  ${number2}`;
  return [questionToUser, String(correctAnswer)];
};

export default () => makeSeriesOfQuestions(getQuestAndAnsw, description);
