import { narcissistic } from './kata';

describe('when finding the narcissistic number', () => {
  it('should return true for 153', () => {
    const result = narcissistic(153);
    
    expect(result).toBe(true);
  });
});