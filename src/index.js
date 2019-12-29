#!/usr/bin/env node
import * as lib from './lib/lib';
import * as set from './lib/set';

const cycleOfQuestions = (gameName) => {
  console.log(`${lib.greeting}\n${set.gameDescription(gameName)}\n`);
  const userName = lib.userName();
  console.log(`Hello, ${userName}!\n`);

  const check = (name) => set.gameCall(name);

  const win = `Congratulations, ${userName}.`;
  const lose = `Let's try again, ${userName}.`;

  for (let counter = 0; counter < 3; counter += 1) {
    const result = check(gameName);
    if (result === false) {
      return lose;
    }
  }
  return win;
};

export default cycleOfQuestions;
