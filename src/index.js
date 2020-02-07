import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';
const questionUserName = () => readlineSync.question('May I have your name? ');
const question = () => readlineSync.question('You answer: ');

const makeSeriesOfQuestions = (getGameScript, gameDescription) => {
  console.log(greeting);
  console.log(`${gameDescription}\n`);
  const userName = questionUserName();
  console.log(`Hello, ${userName}!\n`);

  const win = (`Congratulations, ${userName}.`);
  const lose = (`Let's try again, ${userName}.`);

  const numberOfRounds = 3;
  for (let counter = 0; counter < numberOfRounds; counter += 1) {
    const [questionToUser, correctAnswer] = getGameScript();
    console.log(`Question: ${questionToUser}`);
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

export default makeSeriesOfQuestions;
