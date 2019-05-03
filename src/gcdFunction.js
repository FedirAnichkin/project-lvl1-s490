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
  const iter = (acc) => {
    const divider = Math.ceil(Math.random() * 10);
    const randomNumber1 = Math.ceil(Math.random() * 15) * divider;
    const randomNumber2 = Math.ceil(Math.random() * 15) * divider;
    const greatestDiviser = gcd(randomNumber1, randomNumber2);
    if (acc === 3) {
      return console.log(`Congratulations, ${askName}!`);
    }
    console.log(`\nQuestion: ${randomNumber1} ${randomNumber2}`);
    const getAnswer = readlineSync.question('Your answer: ');
    if (getAnswer !== String(greatestDiviser)) {
      return console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${greatestDiviser}'. \nLet's try again, ${askName}`);
    }
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(0);
};
export default gcdNumber;
