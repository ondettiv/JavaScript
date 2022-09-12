// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
let calculator = {
  read: function() {
          this.a = +prompt('Enter a number', 0);
          this.b = +prompt('Enter a number', 0);
        },
  sum: function() {
          return this.a + this.b;
        },
  mul: function() {
          return this.a * this.b;
        },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );