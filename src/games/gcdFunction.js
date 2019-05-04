import readlineSync from 'readline-sync';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const gcdNumber = () => {
  const askName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${askName}!`);
  let acc = 0;
  while (acc < 3) {
    const divider = Math.ceil(Math.random() * 10);
    const randomNumber1 = Math.ceil(Math.random() * 15) * divider;
    const randomNumber2 = Math.ceil(Math.random() * 15) * divider;
    const greatestDiviser = gcd(randomNumber1, randomNumber2);
    console.log(`\nQuestion: ${randomNumber1} ${randomNumber2}`);
    const getAnswer = parseFloat(readlineSync.question('Your answer: '));
    if (getAnswer !== greatestDiviser) {
      return console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${greatestDiviser}'. \nLet's try again, ${askName}`);
    }
    console.log('Correct!');
    acc += 1;
  }
  return console.log(`Congratulations, ${askName}!`);
};
export default gcdNumber;
