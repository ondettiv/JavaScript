// Write function sum that works like this: sum(a)(b) = a+b.

// Yes, exactly this way, using double parentheses (not a mistype).

// For instance:

alert(sum(1)(2))   // = 3
alert(sum(5)(-1))  // = 4

function sum(a){
  return function(b){
    return a + b;
  }  
}