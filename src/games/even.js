import readlineSync from 'readline-sync';
import { userName } from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n');

const name = userName();
console.log(`Hello, ${name}!\n`);

const random = () => Math.floor(Math.random() * 100);
const question = () => readlineSync.question('You answer: ');

const answer = (number) => (message) => {
  console.log(`Question: ${number}`);
  if ((number % 2 === 0 && message === 'yes') || (number % 2 !== 0 && message === 'no')) {
    console.log('Correct!');
  }
  if (number % 2 === 0 && message !== 'yes') {
    console.log(`'${message}' is wrong answer ;(. Correct answer was 'yes'.`);
    return false;
  } if (number % 2 !== 0 && message !== 'no') {
    console.log(`'${message}' is wrong answer ;(. Correct answer was 'no'.`);
    return false;
  }
  return true;
};

const verification = () => answer(random())(question());

const cycle = (check) => {
  const win = `Congratulations, ${name}.`;
  const lose = `Let's try again, ${name}.`;
  for (let counter = 1; counter < 3 && check === true; counter += 1) {
    check();
  }
  if (check === false) {
    return lose;
  }
  return win;
};

const start = cycle(verification());

export default start;
