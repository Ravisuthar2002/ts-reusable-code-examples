export class NumbersSortable {
    
    constructor(public collection: number[]) {}

    get length() {
        return this.collection.length;
    }

    compare(leftIndex: number, rightIndex: number) {
        return this.collection[leftIndex] > this.collection[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number) {
        let temp = this.collection[leftIndex];
        this.collection[leftIndex] = this.collection[rightIndex];
        this.collection[rightIndex] = temp;
    }
}