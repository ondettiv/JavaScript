// There is a salaries object:

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
};
// Create the function topSalary(salaries) that returns the name of the top-paid person.

// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.
alert(topSalary(salaries));

function topSalary(salaries) {
    let topSalary = 0;
    let topPaidName = null;
  
    for(let [name, salary] of Object.entries(salaries)) {
      if (topSalary < salary) {
        topSalary = salary;
        topPaidName = name;
      }
    }
  
    return topPaidName;
}