const greeting = 'Answer "yes" if number even otherwise answer "no".';
const even = () => {
  const randomNumber = `${Math.ceil(Math.random() * 100)}`;
  const rightAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  const task = `Question: ${randomNumber}`;
  return [rightAnswer, task];
};

export {
  greeting, even,
};
