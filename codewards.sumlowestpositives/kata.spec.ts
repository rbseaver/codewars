import { sumTwoSmallestNumbers } from './kata'

describe('when finding the sum of the two smallest numbers in an array', () => {
  it.each([
    [[19, 5, 42, 2, 77], 7],
    [[988, 45, 700, 123], 168],
    [[10, 343445353, 3453445, 3453545353453], 3453455],
    [[5, 8, 12, 19, 22], 13],
    [[15, 28, 4, 2, 43], 6],
    [[3, 87, 45, 12, 7], 10],
    [[23, 71, 33, 82, 1], 24],
    [[52, 76, 14, 12, 4], 16]
  ])('[%s] should return %s', (input, expected) => {
    const result = sumTwoSmallestNumbers(input);

    expect(result).toBe(expected);
  });
});