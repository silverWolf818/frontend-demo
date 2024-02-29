class ListNode {
    constructor(data, next) {
        this.data = data === undefined ? 0 : data;
        this.next = next === undefined ? null : next;
    }
}

class ArrayStack {
    #stack

    constructor() {
        this.#stack = [];
    }

    getSize() {
        return this.#stack.length;
    }

    push(data) {
        this.#stack.push(data);
    }

    pop() {
        return this.#stack.pop();
    }

    peek() {
        return this.#stack[this.#stack.length - 1];
    }
}