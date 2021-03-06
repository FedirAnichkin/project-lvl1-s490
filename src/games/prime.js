import gameEngine from '..';
import randomNumber from '../utils';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i <= Math.round(number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const primeNumber = () => {
  const numberForTask = randomNumber(1, 100);
  const rightAnswer = isPrime(numberForTask) ? 'yes' : 'no';
  return [rightAnswer, numberForTask];
};
export default () => gameEngine(greeting, primeNumber);
