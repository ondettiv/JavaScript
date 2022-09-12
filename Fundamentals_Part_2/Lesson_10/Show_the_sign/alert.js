// Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.

let selectedNumber = prompt('Please select a Number', 'Just use numbers');

if (selectedNumber > 0){
    alert("1");
} else if (selectedNumber < 0){
    alert("-1");
} else if (selectedNumber == 0){
    alert("0");
} else {
    alert("You are sure than selected a Number 🤨?");
}

// Rewrite 'if' into '?'
// importance: 5
// Rewrite this if using the conditional operator '?':

let result;
let a = prompt('Please select a Number', 0);
let b = prompt('Please select another Number', 0);

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

result = (a + b < 4) ?  'Below' : 'Over';

alert(`${a} + ${b} is ${result} 4`);

// Rewrite 'if..else' into '?'
// importance: 5
// Rewrite if..else using multiple ternary operators '?'.

// For readability, it’s recommended to split the code into multiple lines.

let login = prompt('Please select if you are Director or Employee', '');

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    '';

alert(`${message}`);