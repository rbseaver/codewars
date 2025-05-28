export const isTriangle = (a: number, b: number, c: number): boolean => {
  // Triangle inequality theorem
  return a + b > c && a + c > b && b + c > a
}
