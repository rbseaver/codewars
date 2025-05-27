import { narcissistic } from './kata';

describe('when finding the narcissistic number', () => {
  it('should return true for 153', () => {
    const result = narcissistic(153);
    
    expect(result).toBeTruthy();
  });

  it('should return true for 1634', () => {
    const result = narcissistic(1634);

    expect(result).toBeTruthy();
  });

  it('should return false for 1652 ', () => {
    const result = narcissistic(1652);

    expect(result).toBeFalsy();
  })
});