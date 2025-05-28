import { sumTwoSmallestNumbers } from './kata'

describe('finding the lowest positive integers', () => {
  it('should return 7 for [19, 5, 42, 2, 77]', () => {
    const input = [19, 5, 42, 2, 77]

    const result = sumTwoSmallestNumbers(input);

    expect(result).toBe(7);
  });

  it('should return 168 for [988, 45, 700, 123]', () => {
    const input = [988, 45, 700, 123];

    const result = sumTwoSmallestNumbers(input);

    expect(result).toBe(168);
  });
})