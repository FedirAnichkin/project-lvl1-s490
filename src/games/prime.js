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
const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const primeNumber = () => {
  const randomNumber = Math.ceil(Math.random() * 100);
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const task = `Question: ${randomNumber}`;
  return [rightAnswer, task];
};
export {
  greeting, primeNumber,
};
