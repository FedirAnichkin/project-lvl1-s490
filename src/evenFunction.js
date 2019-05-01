import readlineSync from 'readline-sync';

const answerForQuestion = () => {
  const askName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${askName}!\n`);
  const iter = (acc) => {
    if (acc === 3) {
      return console.log(`Congratulation, ${askName}!`);
    }
    const randomNumber = Math.round(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const writeAnswer = readlineSync.question('Your answer: ');
    const isEven = (randomNumber % 2 === 0);
    const falseAnswer = (writeAnswer === 'yes') ? 'no' : 'yes';
    const rightAnswer = (isEven && writeAnswer === 'yes') || (!isEven && writeAnswer === 'no');
    if (rightAnswer) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    return console.log(`\n'${writeAnswer}' is wrong answer ;(. Correct answer was '${falseAnswer}'. \nLet's try again, ${askName}.`);
  };
  return iter(0);
};
export default answerForQuestion;
