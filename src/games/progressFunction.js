import readlineSync from 'readline-sync';

const progressionNumber = () => {
  const askName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${askName}!`);
  let acc = 0;
  while (acc < 3) {
    const divider = Math.ceil(Math.random() * 7);
    const randomNumber = Math.floor(Math.random() * 10);
    const numberArr = [randomNumber];
    for (let i = 0; i < 9; i += 1) {
      numberArr.push(numberArr[i] + divider);
    }
    const randInt = Math.floor(Math.random() * 10);
    let message = '';
    for (let i = 0; i < numberArr.length; i += 1) {
      message += (i === randInt) ? '.. ' : `${numberArr[i]} `;
    }
    const unknownNumber = numberArr[randInt];
    console.log(`\nQuestion: ${message}`);
    const getAnswer = parseFloat(readlineSync.question('Your answer: '));
    const rightAnswer = (getAnswer === unknownNumber);
    if (!rightAnswer) {
      return console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${unknownNumber}'. \nLet's try again, ${askName}`);
    }
    console.log('Correct!');
    acc += 1;
  }
  return console.log(`Congratulations, ${askName}!`);
};
export default progressionNumber;
