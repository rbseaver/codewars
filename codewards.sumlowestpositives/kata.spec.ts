import { sumTwoSmallestNumbers } from './kata'

describe('finding the lowest positive integers', () => {
  it('should return 7 for [19, 5, 42, 2, 77]', () => {
    const input = [19, 5, 42, 2, 77]

    const result = sumTwoSmallestNumbers(input);

    expect(result).toBe(7);
  })
})