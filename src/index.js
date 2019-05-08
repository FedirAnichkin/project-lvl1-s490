import readlineSync from 'readline-sync';

const gameEngine = (message, func) => {
  console.log('Welcome to Brain Games!');
  console.log(message);
  const askName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello ${askName}!\n`);
  let acc = 0;
  while (acc < 3) {
    const [rightAnswer, task] = func();
    console.log(task);
    const userAnswer = readlineSync.question('Your answer: ');
    const writeAnswer = Number(userAnswer) ? parseFloat(userAnswer) : userAnswer.toLowerCase();
    if (rightAnswer !== String(writeAnswer)) {
      return console.log(`\n'${writeAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${askName}.`);
    }
    console.log('Correct!');
    acc += 1;
  }
  return console.log(`Congratulation, ${askName}!`);
};
export default gameEngine;
