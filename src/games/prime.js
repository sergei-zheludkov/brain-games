import getRandomInt from '../lib/lib';
import cycleOfQuestions from '../index';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 1;
const max = 100;

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


const getQuestAndAnsw = () => {
  const questionToUser = getRandomInt(min, max);
  const correctAnswer = isPrime(questionToUser) ? 'yes' : 'no';

  return [questionToUser, correctAnswer];
};

const callGamePrime = () => cycleOfQuestions(getQuestAndAnsw, description);
export default callGamePrime;
