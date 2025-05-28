# Is it a triangle?

## Instructions

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

## Examples
```bash
Input -> Output
1,2,2 -> true
4,2,3 -> true
2,2,2 -> true
1,2,3 -> false
-5,1,3 -> false
0,2,3 -> false
1,2,9 -> false 
```

## How to determine what makes a triangle

If you don't know the math, or have forgotten the math, this will help.

The triangle inequality theorem states that, for three side lengths to form a valid triangle, the sum of the lengths of any two sides must be greater than the length of the third side. Mathematically, given three sides ( a ), ( b ), and ( c ), they must satisfy:

```bash
( a + b > c )
( a + c > b )
( b + c > a )
```

If all three conditions hold true, the numbers can form a triangle. If even one of them fails, they cannot.
___
- URL: https://www.codewars.com/kata/56606694ec01347ce800001b
- Solution: [kata.ts](./kata.ts)
- Test: [kata.spec.ts](./kata.spec.ts)