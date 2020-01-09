import readlineSync from 'readline-sync';

const gameDescription = (gameName) => {
  let description;

  switch (gameName) {
    case 'even':
      description = 'Answer "yes" if the number is even, otherwise answer "no"';
      break;

    case 'calc':
      description = 'What is the result of the expression?';
      break;

    case 'gcd':
      description = 'Find the greatest common divisor of given numbers';
      break;

    case 'progression':
      description = 'What number is missing in the progression?';
      break;

    case 'prime':
      description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
      break;

    default:
      return console.log('GameName Error "Description"');
  }

  return description;
};

const greeting = 'Welcome to the Brain Games!';
const questionUserName = () => readlineSync.question('May I have your name? ');

const cycleOfQuestions = (gameScript, gameName) => {
  const description = gameDescription(gameName);
  console.log(`${greeting}\n${description}\n`);
  const userName = questionUserName();
  console.log(`Hello, ${userName}!\n`);

  const win = `Congratulations, ${userName}.`;
  const lose = `Let's try again, ${userName}.`;

  for (let counter = 0; counter < 3; counter += 1) {
    const result = gameScript();
    const answer = result[1];
    const correctAnswer = result[2];

    if (result[0] === false) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(lose);
    }
    if (result[0] === true) {
      console.log('Correct!');
    }
  }

  return console.log(win);
};

export default cycleOfQuestions;
