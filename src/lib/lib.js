import readlineSync from 'readline-sync';

export const greeting = 'Welcome to the Brain Games!';
export const userName = () => readlineSync.question('May I have your name? ');
export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
export const question = () => readlineSync.question('You answer: ');
