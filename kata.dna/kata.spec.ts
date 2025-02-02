import { dnaStrand } from './kata';

describe('dna kata tests', () => {
  test.each`
    input	| expected
    ${'AAAA'}	| ${'TTTT'}
    ${'TTTT'}	| ${'AAAA'}
    ${'ATAT'}	| ${'TATA'}
    ${'GGGG'}	| ${'CCCC'}
    ${'CCCC'}	| ${'GGGG'}
    ${'GCGC'}	| ${'CGCG'}
  `('dnaStrand', ({ input, expected }) => {
    expect(dnaStrand(input)).toBe(expected);
  });
});