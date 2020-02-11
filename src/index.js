import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';
const roundsCount = 3;

const makeSeriesOfQuestions = (getGameScript, gameDescription) => {
  console.log(greeting);
  console.log(`${gameDescription}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let counter = 0; counter < roundsCount; counter += 1) {
    const [questionToUser, correctAnswer] = getGameScript();
    console.log(`Question: ${questionToUser}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    }
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}.`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}.`);
};

export default makeSeriesOfQuestions;
