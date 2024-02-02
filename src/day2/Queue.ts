
type Node<T> = {
    value: T;
    next?: Node<T>
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        let node: Node<T> = {value: item, next: undefined};
        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        }  else {
            this.head = this.tail = node;
        }
        this.length +=1;

}
    deque(): T | undefined {
        if (this.head) {
            const to_pop = this.head;
            this.head = this.head.next;
            if (!this.head) {
                this.tail = undefined;
            }
            this.length -= 1;
            return to_pop.value;
        }
        return undefined
}
    peek(): T | undefined {
        return this.head?.value;
}
}