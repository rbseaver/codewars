import { oddOrEven } from './kata';

describe('when determining if sum of array elements is odd or even', () => {
  it.each([
    [[1, 1], 'even'],
    [[1, 2], 'odd'],
    [[1023, 1, 3], 'odd'],
    [[0, -1, -3], 'even'],
    [[], 'even']
  ])('[%s] should be "%s"', (input: number[], expected: string) => {
    const result = oddOrEven(input);

    expect(result).toBe(expected);
  });
})