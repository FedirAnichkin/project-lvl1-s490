import gameEngine from '..';
import randomNumber from '../util';

const greeting = 'What number is missing in the progression?';
const progressionNumber = () => {
  const progressionLength = 10;
  const progressionArray = new Array(progressionLength);
  const step = randomNumber(2, 7);
  const firstElement = randomNumber(1, 10);
  const randomElementInProgArray = randomNumber(0, progressionArray.length - 1);
  let message = '';
  for (let i = 0; i < progressionLength; i += 1) {
    const n = i === 0 ? firstElement : progressionArray[i - 1] + step;
    progressionArray[i] = n;
    message += (i === randomElementInProgArray) ? '.. ' : `${n} `;
  }
  const task = `${message}`;
  const rightAnswer = String(progressionArray[randomElementInProgArray]);
  return [rightAnswer, task];
};
export default () => gameEngine(greeting, progressionNumber);
