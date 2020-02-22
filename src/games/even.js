import getRandomInt from '../lib/lib';
import makeSeriesOfQuestions from '../index';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const min = 1;
const max = 100;

export const isEven = (number) => number % 2 === 0;

const getQuestAndAnsw = () => {
  const questionToUser = getRandomInt(min, max);
  const correctAnswer = isEven(questionToUser) ? 'yes' : 'no';
  return [questionToUser, correctAnswer];
};

const callGameEven = () => makeSeriesOfQuestions(getQuestAndAnsw, description);
export default callGameEven;
