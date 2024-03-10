import { LinkedList } from "../LinkedList";

export class LinkedListSortable {
    
    constructor(public collection: LinkedList) {}

    get length() {
        return this.collection.length;
    }    

    compare(leftIndex: number, rightIndex: number) {
        return this.collection.at(leftIndex).value > this.collection.at(rightIndex).value;
    }

    swap(leftIndex: number, rightIndex: number) {
        let temp = this.collection.at(leftIndex).value;
        this.collection.at(leftIndex).value = this.collection.at(rightIndex).value;
        this.collection.at(rightIndex).value = temp;
    }
}