#!/usr/bin/env node

import readlineSync from 'readline-sync';
import calc from '../games/calc';
import even from '../games/even';
import gcd from '../games/gcd';
import prime from '../games/prime';
import progression from '../games/progression';

const chooseGame = (gameName) => {
  switch (gameName) {
    case 'brain-calc':
      return calc();
    case 'brain-even':
      return even();
    case 'brain-gcd':
      return gcd();
    case 'brain-prime':
      return prime();
    case 'brain-progression':
      return progression();
    default:
      return console.log('Thanks and good bye!');
  }
};

const gameNumbers = ['brain-calc', 'brain-even', 'brain-gcd', 'brain-prime', 'brain-progression'];

console.log('Welcome to the Brain Games!');
const answer = readlineSync.keyInSelect(gameNumbers, 'Select a game, which would you play.');
chooseGame(gameNumbers[answer]);
