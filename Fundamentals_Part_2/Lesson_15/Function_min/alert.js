// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

let firstSelected = prompt('Select a number', '')
let secondSelected = prompt('Select a number', '')

alert(min(firstSelected, secondSelected));

function min(first, second){
  return (Number(first) < Number(second)) ? first : second;
}

