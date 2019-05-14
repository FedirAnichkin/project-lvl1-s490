import gameEngine from '..';
import randomNumber from '../utils';

const greeting = 'What number is missing in the progression?';
const progressionNumber = () => {
  const progressionLength = 10;
  const progressionArray = [];
  const step = randomNumber(2, 7);
  const firstElement = randomNumber(1, 10);
  const hiddenElementPosition = randomNumber(0, progressionLength - 1);
  let message = '';
  for (let i = 0; i < progressionLength; i += 1) {
    const n = i === 0 ? firstElement : firstElement + step * i;
    progressionArray[i] = n;
    message += (i === hiddenElementPosition) ? '.. ' : `${n} `;
  }
  const task = message;
  const rightAnswer = progressionArray[hiddenElementPosition];
  return [rightAnswer, task];
};
export default () => gameEngine(greeting, progressionNumber);
