import readlineSync from 'readline-sync';

const isEvenNumber = () => {
  const askName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${askName}!\n`);
  let acc = 0;
  while (acc < 3) {
    const randomNumber = Math.round(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const writeAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const isEven = (randomNumber % 2 === 0) ? 'yes' : 'no';
    const rightAnswer = (isEven === writeAnswer);
    if (!rightAnswer) {
      return console.log(`\n'${writeAnswer}' is wrong answer ;(. Correct answer was '${isEven}'. \nLet's try again, ${askName}.`);
    }
    console.log('Correct!');
    acc += 1;
  }
  return console.log(`Congratulation, ${askName}!`);
};
export default isEvenNumber;
