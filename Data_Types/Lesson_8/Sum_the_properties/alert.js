// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.

// For instance:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650


function sumSalaries(salaries) {
    let totalSalaries = 0;

    for (let value of Object.values(salaries)) {
        totalSalaries += +value;
    };

    return totalSalaries;
}