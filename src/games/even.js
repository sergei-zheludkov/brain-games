import readlineSync from 'readline-sync';
import { userName } from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n');

const name = userName();
console.log(`Hello, ${name}!\n`);

const answer = (number) => (message) => {
  number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  message = readlineSync.question('You answer: ');

  if (number % 2 === 0 && message === 'yes' || number % 2 !== 0 && message === 'no') {
    console.log ('Correct!');
  }
  if (number % 2 === 0 && message !== 'yes') {
    console.log(`${message} is wrong answer ;(. Correct answer was 'yes'.`);
    return false;
  } else if (number % 2 !== 0 && message !== 'no') {
    console.log(`${message} is wrong answer ;(. Correct answer was 'no'.`);
    return false;
  }
return true;
};

const cycle = (check) => {
  const win = `Congratulations, ${name}.`;
  const lose = `Let's try again, ${name}.`;

  for (let counter = 1; counter < 3 && check === true; counter +=1) {
    check = answer()();
  }
  if (check === false) {
   return lose;
  }
  return win;
};

export const start = cycle(answer()());

