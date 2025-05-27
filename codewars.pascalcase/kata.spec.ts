import { toPascalCase } from './kata';

describe('when converting to camel case', () => {
  it('should do the thing!', () => {
    const input = 'derp is my favorite word';

    const result = toPascalCase(input);

    expect(result).toBe('DerpIsMyFavoriteWord');
  })
});