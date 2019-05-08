const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};
const greeting = 'Find the greatest common divisor of given numbers.';
const gcdNumber = () => {
  const divider = Math.ceil(Math.random() * 10);
  const randomNumber1 = Math.ceil(Math.random() * 15) * divider;
  const randomNumber2 = Math.ceil(Math.random() * 15) * divider;
  const rightAnswer = String(gcd(randomNumber1, randomNumber2));
  const task = `Question: ${randomNumber1} ${randomNumber2}`;
  return [rightAnswer, task];
};
export {
  greeting, gcdNumber,
};
