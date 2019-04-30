import readlineSync from 'readline-sync';

const askUserName = () => {
  const askName = readlineSync.question('May I have your name? ');
  return console.log(`Hello ${askName}!`);
};
export default askUserName;
