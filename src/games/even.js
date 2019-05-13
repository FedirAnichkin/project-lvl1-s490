import gameEngine from '..';
import randomNumber from '../util';

const greeting = 'Answer "yes" if number even otherwise answer "no".';
const even = () => {
  const number = randomNumber(1, 100);
  const rightAnswer = (number % 2 === 0) ? 'yes' : 'no';
  const task = `${number}`;
  return [rightAnswer, task];
};

export default () => gameEngine(greeting, even);
