import gameEngine from '..';
import randomNumber from '../utils';

const isEven = num => (num % 2 === 0);

const greeting = 'Answer "yes" if number even otherwise answer "no".';
const even = () => {
  const numberForTask = randomNumber(1, 100);
  const rightAnswer = isEven(numberForTask) ? 'yes' : 'no';
  return [rightAnswer, numberForTask];
};

export default () => gameEngine(greeting, even);
