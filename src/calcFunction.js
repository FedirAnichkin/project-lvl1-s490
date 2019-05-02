import readlineSync from 'readline-sync';

const calcNumber = () => {
  const askName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${askName}!`);
  const iter = (acc) => {
    const randomNumber1 = Math.ceil(Math.random() * 30);
    const randomNumber2 = Math.ceil(Math.random() * 30);
    const addNumber = () => randomNumber1 + randomNumber2;
    const subNumber = () => randomNumber1 - randomNumber2;
    const multNumber = () => randomNumber1 * randomNumber2;
    if (acc === 3) {
      return console.log(`Congratulations, ${askName}!`);
    }
    const operationArr = [addNumber(), subNumber(), multNumber()];
    const operatorArr = ['+', '-', '*'];
    const i = Math.floor(Math.random() * 3);
    console.log(`\nQuestion: ${randomNumber1}${operatorArr[i]}${randomNumber2}`);
    const getAnswer = readlineSync.question('Your answer: ');
    if (getAnswer !== String(operationArr[i])) {
      return console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${operationArr[i]}'. \nLet's try again, ${askName}`);
    }
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(0);
};

export default calcNumber;
