export const sumTwoSmallestNumbers = (numbers: number[]): number => {
  const [x, y] = numbers.sort((a, b) => a - b)

  // If we returned an array of e.g., `twoSmallest` above,
  // we could do something fancy here: //twoSmallest.reduce((sum, current) => sum += current, 0);
  // But, .reduce() is overkill for summing exactly two numbers
  return x + y;
}