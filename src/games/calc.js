import gameEngine from '..';
import randomNumber from '../utils';

const operatorsArray = ['+', '-', '*'];

const rightCalculation = (num1, num2, operators) => {
  switch (operators) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const greeting = 'What is the result of the expression?';
const calcNumber = () => {
  const number1 = randomNumber(1, 30);
  const number2 = randomNumber(1, 30);
  const i = randomNumber(0, operatorsArray.length - 1);
  const task = `${number1}${operatorsArray[i]}${number2}`;
  const rightAnswer = String(rightCalculation(number1, number2, operatorsArray[i]));
  return [rightAnswer, task];
};
export default () => gameEngine(greeting, calcNumber);
