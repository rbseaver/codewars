import { isTriangle } from './kata';

describe('is it a triangle?', () => {
  it.each([
    [[1, 2, 2], true],
    [[1, 2, 3], false],
    [[7, 2, 2], false],
    [[-5, 1, 3], false]
  ])('%s returns %s for isTriangle', (input, expected) => {
    const [a, b, c] = input;

    const result = isTriangle(a, b, c);

    expect(result).toEqual(expected);
  });
})