import readlineSync from 'readline-sync';

const gameEngine = (message, func) => {
  console.log('Welcome to Brain Games!');
  console.log(message);
  const askName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello ${askName}!\n`);
  const gameRounds = 3;
  for (let i = 1; i <= gameRounds; i += 1) {
    const [rightAnswer, task] = func();
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const writeAnswer = Number(userAnswer) ? parseFloat(userAnswer) : userAnswer.toLowerCase();
    if (rightAnswer === writeAnswer) {
      console.log('Correct!');
    } else {
      console.log(`\n'${writeAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${askName}.`);
      return;
    }
  }
  console.log(`Congratulation, ${askName}!`);
};
export default gameEngine;
