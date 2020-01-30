import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';
const questionUserName = () => readlineSync.question('May I have your name? ');
const question = () => readlineSync.question('You answer: ');

const cycleOfQuestions = (gameScript, gameDescription) => {
  console.log(`${greeting}\n${gameDescription}\n`);
  const userName = questionUserName();
  console.log(`Hello, ${userName}!\n`);

  const win = (`Congratulations, ${userName}.`);
  const lose = (`Let's try again, ${userName}.`);

  for (let counter = 0; counter < 3; counter += 1) {
    const result = gameScript();
    const correctAnswer = result[1];
    console.log(`Question: ${result[0]}`);
    const userAnswer = question();

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    }
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(lose);
      return;
    }
  }
  console.log(win);
};

export default cycleOfQuestions;
