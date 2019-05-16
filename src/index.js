import readlineSync from 'readline-sync';

const gameRounds = 3;

const gameEngine = (message, func) => {
  console.log('Welcome to Brain Games!');
  console.log(message);
  const askName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello ${askName}!\n`);
  for (let i = 1; i <= gameRounds; i += 1) {
    const [rightAnswer, task] = func();
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${askName}.`);
      return;
    }
  }
  console.log(`Congratulation, ${askName}!`);
};
export default gameEngine;
