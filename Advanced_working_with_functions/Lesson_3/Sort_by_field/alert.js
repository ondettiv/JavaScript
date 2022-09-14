// We’ve got an array of objects to sort:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
// The usual way to do that would be:

// by name (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// by age (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Can we make it even less verbose, like this?
alert(JSON.stringify(users));
alert(JSON.stringify(users.sort(byField('name'))));
alert(JSON.stringify(users.sort(byField('age'))));
// So, instead of writing a function, just put byField(fieldName).

// Write the function byField that can be used for that.

function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}