import gameEngine from '..';
import randomNumber from '../utils';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};
const greeting = 'Find the greatest common divisor of given numbers.';
const gcdNumber = () => {
  const divider = randomNumber(2, 10);
  const number1 = randomNumber(1, 15) * divider;
  const number2 = randomNumber(1, 15) * divider;
  const rightAnswer = String(gcd(number1, number2));
  const task = `${number1} ${number2}`;
  return [rightAnswer, task];
};
export default () => gameEngine(greeting, gcdNumber);
