import getRandomInt from '../lib/lib';
import cycleOfQuestions from '../index';

const description = 'What number is missing in the progression?';
const min = 1;
const max = 10;

const progerssion = (step, shadowNumber) => {
  let out = '';
  let result;

  for (let counter = max, number = getRandomInt(0, max); counter !== 0; counter -= 1) {
    if (counter === shadowNumber) {
      out += '.. ';
      number += step;
      result = number;
    } else {
      number += step;
      out += `${number} `;
    }
  }

  return [out, result];
};

const getQuestAndAnsw = () => {
  const randomStepProgression = getRandomInt(min, max);
  const randomShadowNumber = getRandomInt(min, max);
  const operation = progerssion(randomStepProgression, randomShadowNumber);
  const questionToUser = operation[0];
  const correctAnswer = operation[1];

  return [questionToUser, String(correctAnswer)];
};

const callGameProgression = () => cycleOfQuestions(getQuestAndAnsw, description);
export default callGameProgression;
