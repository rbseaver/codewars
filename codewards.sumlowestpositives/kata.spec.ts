import { sumTwoSmallestNumbers } from './kata'

describe('when finding the sum of the two smallest numbers in an array', () => {
  it.each([
    [[19, 5, 42, 2, 77], 7],
    [[988, 45, 700, 123], 168]
  ])('[%s] should return %s', (input, expected) => {
    const result = sumTwoSmallestNumbers(input);

    expect(result).toBe(expected);
  });
});