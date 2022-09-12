// Write an if condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.

let age = prompt('What is your age?', '');

if (age >= 14 && age <= 90) {
    alert(`With ${age} years, you are IN the 14-90 range`)
} else {
    alert(`With ${age} years, yoy are OUT of 14-90 range`)
}

// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

let isOutBound =  !(age >= 14 && age <= 90) 
let isAlsoOutBound =  (age < 14 || age > 90) 

alert(isOutBound);
alert(isAlsoOutBound);
