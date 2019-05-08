const greeting = 'What is the result of the expression?';
const calcNumber = () => {
  const randomNumber1 = Math.ceil(Math.random() * 30);
  const randomNumber2 = Math.ceil(Math.random() * 30);
  const addNumber = () => randomNumber1 + randomNumber2;
  const subNumber = () => randomNumber1 - randomNumber2;
  const multNumber = () => randomNumber1 * randomNumber2;
  const operationArr = [addNumber(), subNumber(), multNumber()];
  const operatorArr = ['+', '-', '*'];
  const i = Math.floor(Math.random() * 3);
  const task = `Question: ${randomNumber1}${operatorArr[i]}${randomNumber2}`;
  const rightAnswer = String(operationArr[i]);
  return [rightAnswer, task];
};
export {
  greeting, calcNumber,
};
