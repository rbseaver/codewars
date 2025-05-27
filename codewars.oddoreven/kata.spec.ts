import { oddOrEven } from './kata';

describe('when determining if sum of array elements is odd or even', () => {
  it('should return "even" if the sum is even', () => {
    const input = [1, 1];

    const result = oddOrEven(input);

    expect(result).toBe('even');
  });

  it('should return "odd" if the sum is odd', () => {
    const input = [1, 2];

    const result = oddOrEven(input);

    expect(result).toBe('odd');
  });

  it('more "odd" tests', () => {
    const input = [1023, 1, 3];

    const result = oddOrEven(input);

    expect(result).toBe('odd');
  });

  it('negative numbers', () => {
    const input = [0, -1, -3];

    const result = oddOrEven(input);

    expect(result).toBe('even');
  })

  it('empty array should be considered [0]', () => {
    const input: number[] = [];

    const result = oddOrEven(input);

    expect(result).toBe('even');
  })
})