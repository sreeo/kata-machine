type Node<T> = {
    value: T;
    previous?: Node<T>
}
export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    

    constructor() {
        this.length = 0
        this.head = undefined
    }

    push(item: T): void {
        let node = {value: item, previous: this.head};
        this.head = node;
        this.length++;

}
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const current = this.head;
        this.head = current.previous;
        this.length--;
        return current?.value;
}
    peek(): T | undefined {
        return this.head?.value;

}
}