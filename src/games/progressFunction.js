import readlineSync from 'readline-sync';

const progressionNumber = () => {
  const askName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${askName}!`);
  let acc = 0;
  const numberArr = new Array(10);
  while (acc < 3) {
    const divider = Math.ceil(Math.random() * 7);
    const randomNumber = Math.floor(Math.random() * 10);
    const randInt = Math.floor(Math.random() * 10);
    let message = '';
    for (let i = 0; i < 10; i += 1) {
      const n = i === 0 ? randomNumber : numberArr[i - 1] + divider;
      numberArr[i] = n;
      message += (i === randInt) ? '.. ' : `${n} `;
    }
    console.log(`\nQuestion: ${message}`);
    const getAnswer = parseFloat(readlineSync.question('Your answer: '));
    const rightAnswer = (getAnswer === numberArr[randInt]);
    if (!rightAnswer) {
      return console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${numberArr[randInt]}'. \nLet's try again, ${askName}`);
    }
    console.log('Correct!');
    acc += 1;
  }
  return console.log(`Congratulations, ${askName}!`);
};
export default progressionNumber;
