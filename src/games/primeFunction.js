import readlineSync from 'readline-sync';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const primeNumber = () => {
  const askName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${askName}!`);
  let acc = 0;
  while (acc < 3) {
    const randomNumber = Math.ceil(Math.random() * 100);
    const result = isPrime(randomNumber) ? 'yes' : 'no';
    console.log(`\nQuestion: ${randomNumber}`);
    const getAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (getAnswer !== result) {
      return console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${askName}`);
    }
    console.log('Correct!');
    acc += 1;
  }
  return console.log(`Congratulations, ${askName}!`);
};
export default primeNumber;
