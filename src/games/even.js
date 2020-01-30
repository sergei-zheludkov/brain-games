import getRandomInt from '../lib/lib';
import cycleOfQuestions from '../index';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const min = 1;
const max = 100;

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getQuestAndAnsw = () => {
  const questionToUser = getRandomInt(min, max);
  const correctAnswer = isEven(questionToUser) ? 'yes' : 'no';

  return [questionToUser, correctAnswer];
};

const callGameEven = () => cycleOfQuestions(getQuestAndAnsw, description);
export default callGameEven;
