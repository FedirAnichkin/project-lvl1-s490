import gameEngine from '..';
import randomNumber from '../utils';

const isEven = num => (num % 2 === 0);

const greeting = 'Answer "yes" if number even otherwise answer "no".';
const even = () => {
  const number = randomNumber(1, 100);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  const task = number;
  return [rightAnswer, task];
};

export default () => gameEngine(greeting, even);
