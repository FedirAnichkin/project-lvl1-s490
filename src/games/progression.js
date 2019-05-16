import gameEngine from '..';
import randomNumber from '../utils';

const progressionLength = 10;

const greeting = 'What number is missing in the progression?';
const progressionNumber = () => {
  const step = randomNumber(2, 7);
  const firstElement = randomNumber(1, 10);
  const hiddenElementPosition = randomNumber(0, progressionLength - 1);
  let message = '';
  for (let i = 0; i < progressionLength; i += 1) {
    message += (i === hiddenElementPosition) ? '.. ' : `${firstElement + i * step} `;
  }
  const task = message.trim();
  const rightAnswer = String(firstElement + hiddenElementPosition * step);
  return [rightAnswer, task];
};
export default () => gameEngine(greeting, progressionNumber);
