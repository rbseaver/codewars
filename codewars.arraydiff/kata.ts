export const arrayDiff = (a: number[], b: number[]): number[] => {
  return a.filter(x => !b.includes(x));
}