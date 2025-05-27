import { toPascalCase } from './kata';

describe('when converting to camel case', () => {
  it.each([
    ['derp is my favorite word', 'DerpIsMyFavoriteWord'],
    ['I like camels', 'ILikeCamels']
  ])('should convert "%s" to "%s"', (input, expected) => {
    const result = toPascalCase(input);
    expect(result).toBe(expected);
  });

  it('should return empty string if input is empty', () => {
    const input = '';

    const result = toPascalCase(input);

    expect(result).toBe('');
  });

  it('should gracefully handle empty words or multiple spaces', () => {
    const input = 'this has  more than one space  ';

    const result = toPascalCase(input);

    expect(result).toBe('ThisHasMoreThanOneSpace');
  })
});