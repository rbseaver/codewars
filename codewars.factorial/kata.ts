export const factorial = (n: number): number => {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// Because everyone and their dog will use recursion.
export const factorialNonRecursive = (n: number): number => {
  let result = 1;

  for (let i = n; i > 1; i--) {
    result *= i;
  }

  return result;
}

