class Node {
    next: Node | null = null;
    constructor(public value: number) {}
}

export class LinkedList {
    start: Node | null = null;
    constructor(values: number[]){
        values.forEach(value => {
            this.add(value);
        })
    }

    get length() {
        let count = 0;
        let head = this.start;
        while(head !== null) {
            count++;
            head = head.next;
        }
        return count;
    }
    
    add(value: number) {
        const node = new Node(value);
        if(this.start === null) {
            this.start = node;
            return;
        }

        let head = this.start;
        while(head !== null) {
            if(head.next === null) {
                head.next = node;
                break;
            }
            head = head.next;
        }
    }

    at(index: number) {
        let count = 0;
        let head = this.start;
        while(head !== null) {
            if(count === index) {
                return head;
            }
            head = head.next;
            count++;
        }

        throw Error("invalid index");
    }

    print() {
        let head = this.start;
        while(head !== null) {
            console.log(head.value);
            head = head.next;
        }
    }
}