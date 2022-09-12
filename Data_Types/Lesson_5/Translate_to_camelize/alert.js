// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

alert(camelize("background-color")) // == 'backgroundColor';
alert(camelize("list-style-image")) // == 'listStyleImage';
alert(camelize("-webkit-transition")) // == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize(str) {
  return str
    .split('-')
    .map(
      (word, index) => {return (index == 0) ? word : word[0].toUpperCase() + word.slice(1)}
    )
    .join('');
}