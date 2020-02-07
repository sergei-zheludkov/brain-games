import getRandomInt from '../lib/lib';
import cycleOfQuestions from '../index';

const description = 'What number is missing in the progression?';
const min = 1;
const max = 10;

const getQuestAndAnsw = () => {
  const questionToUser = [];
  const number = getRandomInt(0, max);
  const stepProgression = getRandomInt(min, max);
  const shadowNumber = getRandomInt(min, max);
  const correctAnswer = String(number + stepProgression * shadowNumber);

  for (let counter = 0; counter < max; counter += 1) {
    if (counter === shadowNumber) {
      questionToUser.push('..');
    } else {
      const currentNumber = number + stepProgression * counter;
      questionToUser.push(currentNumber);
    }
  }

  return [questionToUser.join(' '), correctAnswer];
};

const callGameProgression = () => cycleOfQuestions(getQuestAndAnsw, description);
export default callGameProgression;
