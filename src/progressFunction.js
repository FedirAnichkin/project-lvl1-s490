import readlineSync from 'readline-sync';

const progressNumber = () => {
  const askName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${askName}!`);
  const iter = (acc) => {
    const divider = Math.ceil(Math.random() * 7);
    const randomNumber = Math.floor(Math.random() * 10);
    const numberArr = [];
    for (let i = 0; i < (10 * divider); i += divider) {
      numberArr.push(randomNumber + i);
    }
    if (acc === 3) {
      return console.log(`Congratulations, ${askName}!`);
    }
    const randI = Math.floor(Math.random() * 10);
    let message = '';
    for (let i = 0; i < numberArr.length; i += 1) {
      if (i === randI) {
        message += '.. ';
      }
      if (i !== randI) {
        message += `${numberArr[i]} `;
      }
    }
    console.log(`\nQuestion: ${message}`);
    const getAnswer = readlineSync.question('Your answer: ');
    if (getAnswer !== String(numberArr[randI])) {
      return console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${numberArr[randI]}'. \nLet's try again, ${askName}`);
    }
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(0);
};
export default progressNumber;
