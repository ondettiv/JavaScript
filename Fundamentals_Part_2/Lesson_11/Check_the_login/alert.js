// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, 
// if the input is an empty line or Esc – show “Canceled”, 
// if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
// The schema:

//https://javascript.info/task/check-login/ifelse_task.svg

// Please use nested if blocks. Mind the overall readability of the code.

// Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.

let whoThis = prompt('Who are you?', '');
const IS_ADMIN = 'Admin';
const ADMIN_PASS = 'TheMaster';

if (whoThis === IS_ADMIN){
    let pass = prompt('Insert Password', '');

    if (pass === ADMIN_PASS){
        alert("Welcome!");
    } else if (pass === null || pass === '') {
        alert("Canceled");
    } else {
        alert("Wrong password");
    } 

} else if (whoThis === null || whoThis === '') {
    alert("Canceled");
} else {
    alert("I don't know you");
} 