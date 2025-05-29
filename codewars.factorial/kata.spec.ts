import { factorial, factorialNonRecursive } from './kata'

describe('when calculating factorial', () => {
  describe('with recursive factorial function', () => {
    it.each([
      [0, 1],
      [1, 1],
      [4, 24],
      [7, 5040],
      [17, 355687428096000]
    ])('and %s is passed, factorial from recursive function should be %s', (input, expected) => {
      const result = factorial(input);

      expect(result).toBe(expected);
    });
  });

  describe('with non-recursive function', () => {
    it.each([
      [0, 1],
      [1, 1],
      [4, 24],
      [7, 5040],
      [17, 355687428096000]
    ])('and %s is passed, factorial from non-recursive factorial function should be %s', (input, expected) => {
      const result = factorialNonRecursive(input);

      expect(result).toBe(expected);
    });
  });
});