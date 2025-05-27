import { narcissistic } from './kata';

describe('when finding the narcissistic number', () => {
  it.each([
    [153, true],
    [1634, true],
    [1652, false]
  ])('"%d" should be "%b"', (input, expected) => {
    const result = narcissistic(input);

    expect(result).toBe(expected);
  });
});