// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) //= 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Make 3 solution variants:

// Using a for loop.
// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// Using the arithmetic progression formula. https://en.wikipedia.org/wiki/Arithmetic_progression
// An example of the result:

// Using a for loop.
// -----------------------------------------
// function sumTo(n) { 
//   let result = 0;

//   for (let i = n; i > 0; i--) {
//     result += i;
//   }

//    return result;
// }

// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// -----------------------------------------
// function sumTo(n) { 
//   return (n == 1) ? n : n + sumTo(n-1);
// }


// Using the arithmetic progression formula.
// This sum can be found quickly by taking the number n of terms being added (here 5),
// multiplying by the sum of the first and last number in the progression (here 2 + 14 = 16),
// and dividing by 2:
// 5*(2 +14) / 2
// -----------------------------------------
function sumTo(n) { 
  return n * (n + 1) / 2
}


alert( sumTo(100) ); // 5050
// P.S. Which solution variant is the fastest? The slowest? Why?

// P.P.S. Can we use recursion to count sumTo(100000)?