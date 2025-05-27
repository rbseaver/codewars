// https://www.codewars.com/kata/523f5d21c841566fde000009

import { arrayDiff } from './kata';

describe('when calculating array diff', () => {
  it.each([
    [[[1, 2], [1]], [2]],
    [[[1, 2, 2, 2, 3], [2]], [1, 3]],
    [[[3, 4], [3]], [4]],
    [[[], [4, 5]], []],
    [[[1, 8, 2], []], [1, 8, 2]]
  ])('[%s] should be filtered and contain [%s]', (input, expected) => {
    const result = arrayDiff(input[0], input[1]);

    expect(result).toEqual(expected);
  });
})