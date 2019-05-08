const greeting = 'What number is missing in the progression?';
const progressionNumber = () => {
  const numberArr = new Array(10);
  const divider = Math.ceil(Math.random() * 7);
  const randomNumber = Math.floor(Math.random() * 10);
  const randInt = Math.floor(Math.random() * 10);
  let message = '';
  for (let i = 0; i < 10; i += 1) {
    const n = i === 0 ? randomNumber : numberArr[i - 1] + divider;
    numberArr[i] = n;
    message += (i === randInt) ? '.. ' : `${n} `;
  }
  const task = `Question: ${message}`;
  const rightAnswer = String(numberArr[randInt]);
  return [rightAnswer, task];
};
export {
  greeting, progressionNumber,
};
