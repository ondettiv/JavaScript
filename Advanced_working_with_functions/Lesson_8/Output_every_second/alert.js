// Write a function printNumbers(from, to) that outputs a number every second, 
// starting from from and ending with to.

// Make two variants of the solution.

// Using setInterval.
// Using nested setTimeout.

printNumbers(2, 5)

// function printNumbers(from, to) {
//   let current = from;

// // Has a 1sec delay in the firt call
// // -----------------------------------------
// //   let printTimer = setInterval(() => { 
// //     alert(current++)
// //     if (current > to) {clearInterval(printTimer)};
// //   }, 1000);

// // Not delay in the firt call
// // -----------------------------------------
//   function go() {
//     alert(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }

//   go();
//   let timerId = setInterval(go, 1000);
// }

function printNumbers(from, to) {
  let current = from;
  
  let printTimer = setTimeout(function tick() {
    alert(current++)
    if (current > to) {
      clearTimeout(printTimer)
    } else {
      printTimer = setTimeout(tick, 1000); // (*)
    }
  }, 1000);
}