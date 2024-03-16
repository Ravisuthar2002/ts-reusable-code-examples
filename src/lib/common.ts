import { LinkedList } from "./classes/LinkedList";

export function sortNumbers(numbers: number[]) {
    if(numbers.length < 2) {
        return;
    }
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length - 1; j++) {
            if(numbers[j] > numbers[j+1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j +1];
                numbers[j+1] = temp;
            }
        }
    }
}

export function sortLinkedList(list: LinkedList) {
     if(list.length < 2) {
        return;
    }
    
    for(let i = 0; i < list.length; i++) {
        for(let j = 0; j < list.length - 1; j++) {
            if(list.at(j).value > list.at(j+1).value) {
                let temp = list.at(j).value;
                list.at(j).value = list.at(j+1).value;
                list.at(j+1).value = temp;
            }
        }
    }
}

interface Sortable {
    length: number;
    compare: (leftIndex: number, rightIndex: number) => boolean;
    swap: (leftIndex: number, rightIndex: number) => void;
}

export function sort(data: Sortable) {
    if(data.length < 2) {
        return;
    }
    
    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data.length - 1; j++) {
            if(data.compare(j, j+1)) {
                data.swap(j, j+1);
            }
        }
    }
}