import readlineSync from 'readline-sync';

export const greeting = 'Welcome to the Brain Games!';
export const userName = () => readlineSync.question('May I have your name? ');
export const numberRandom = () => Math.floor(Math.random() * 100) + 1;
export const question = () => readlineSync.question('You answer: ');
