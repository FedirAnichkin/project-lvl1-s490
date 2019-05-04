import readlineSync from 'readline-sync';

const calcNumber = () => {
  const askName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${askName}!`);
  let acc = 0;
  while (acc < 3) {
    const randomNumber1 = Math.ceil(Math.random() * 30);
    const randomNumber2 = Math.ceil(Math.random() * 30);
    const addNumber = () => randomNumber1 + randomNumber2;
    const subNumber = () => randomNumber1 - randomNumber2;
    const multNumber = () => randomNumber1 * randomNumber2;
    const operationArr = [addNumber(), subNumber(), multNumber()];
    const operatorArr = ['+', '-', '*'];
    const i = Math.floor(Math.random() * 3);
    console.log(`\nQuestion: ${randomNumber1}${operatorArr[i]}${randomNumber2}`);
    const getAnswer = parseFloat(readlineSync.question('Your answer: '));
    if (getAnswer !== operationArr[i]) {
      return console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${operationArr[i]}'. \nLet's try again, ${askName}`);
    }
    console.log('Correct!');
    acc += 1;
  }
  return console.log(`Congratulations, ${askName}!`);
};
export default calcNumber;
