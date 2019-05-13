export const operatorsArray = ['+', '-', '*'];

export const rightCalculation = (num1, num2, operators) => {
  switch (operators) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};
