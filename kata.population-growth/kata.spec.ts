import { nbYear } from './kata';

describe('predicting time to grow to a certain population', () => {
  test('should return the number of years needed to reach specified population', () => {
    const result = nbYear(1500, 5, 100, 5000);

    expect(result).toBe(15);
  });
});