#!/usr/bin/env node
/* eslint-disable import/prefer-default-export */

import readlineSync from 'readline-sync';

export const userName = () => readlineSync.question('May I have your name? ');
