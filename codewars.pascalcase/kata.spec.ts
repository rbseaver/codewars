import { toPascalCase } from './kata';

/* This is for the following kata: https://www.codewars.com/kata/587731fda577b3d1b0001196
This achieves what the instructions ask for, and all the cases shown in the pre-submimssion tests.

However, when submitting (not pre-submission tests), there is a random test failure for "random string",
but it is not known what inputs the test is using. The test fails, but all that it indicates
is that the output does not match the expected output. So, this solution fails on submit, but meets
all the outlined specs.

I'm committing it to the solutions anyway. It's quite possible I'm missing something obvious, and
I will return and correct this if if I discover the input that's being tested.
*/

describe('when converting to pascal case', () => {
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