import { LinkedList } from "./lib/LinkedList";

import { sortNumbers, sortLinkedList } from "./lib/common";

let list = new LinkedList([1, 4, 2, 67, -5, 0]);
let numbers: number[] = [5, 6, 8, 1, 0, -4];

console.log("==== NUMBERS SORTING ====")
console.log("BEFORE ---")
console.log(numbers);
sortNumbers(numbers);
console.log("AFTER ---")
console.log(numbers);

console.log("==== LINKED LIST SORTING ====");
console.log("BEFORE ---")
list.print();
sortLinkedList(list);
console.log("AFTER ---")
list.print();