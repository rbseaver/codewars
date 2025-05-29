import { factorial } from './kata'

describe('when calculating factorial', () => {
  it('and 0 is passed, factorial should be 1', () => {
    const result = factorial(0);

    expect(result).toBe(1);
  });

  it('and 1 is passed, factorial should be 1', () => {
    const result = factorial(1);

    expect(result).toBe(1);
  })
})