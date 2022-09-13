// Output a single-linked list from the previous task Output a single-linked list in the reverse order.

// Make two solutions: using a loop and using a recursion.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printList(list);


// Recursion
// -----------------------------------------
function printList(list) {
  if(list.next){
    printList(list.next);
  }
  
  alert(list.value)
}


// Loop
// -----------------------------------------
// function printList(list) { 
//   let current = list;
//   let myList = [];

//   while (current) {
//     myList.push(current.value)
//     current = current.next;
//   }

//   for (let i = myList.length - 1; i >= 0 ; i--) {
//     alert(myList[i]);
//   }

// }