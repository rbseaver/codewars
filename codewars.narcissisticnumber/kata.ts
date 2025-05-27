export const narcissistic = (value: number): boolean => {
  const digits = value.toString()
    .split('')
    .map(Number);

  const power = digits.length;

  let sum = digits.reduce((acc, digit) => {
    return acc + Math.pow(digit, power)
  }, 0);

  return sum === value;
}