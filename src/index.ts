import { LinkedList } from "./lib/LinkedList";

import { sort } from "./lib/common";
import { LinkedListSortable } from "./lib/sort-classes/LinkedListSortable";
import { NumbersSortable } from "./lib/sort-classes/NumbersSortable";


let list = new LinkedList([3, 0, -2, 4, 91]);
let numbers = [5, 6, 8, 1, 0, -4];
console.log("==== NUMBERS SORTING ====")
console.log("BEFORE ---")
console.log(numbers);
sort(new NumbersSortable(numbers))
console.log("AFTER ---")
console.log(numbers);

console.log("==== LINKED LIST SORTING ====");
console.log("BEFORE ---")
list.print();
sort(new LinkedListSortable(list));
console.log("AFTER ---")
list.print();