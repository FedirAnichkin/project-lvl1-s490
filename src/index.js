import readlineSync from 'readline-sync';

const gameEngine = (message, func) => {
  console.log('Welcome to Brain Games!');
  console.log(message);
  const askName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello ${askName}!\n`);
  for (let i = 0; i < 3; i += 1) {
    const [rightAnswer, task] = func();
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const writeAnswer = Number(userAnswer) ? parseFloat(userAnswer) : userAnswer.toLowerCase();
    if (rightAnswer !== String(writeAnswer)) {
      console.log(`\n'${writeAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${askName}.`);
      break;
    }
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulation, ${askName}!`);
    }
  }
};
export default gameEngine;
