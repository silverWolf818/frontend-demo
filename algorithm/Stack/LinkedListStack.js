class ListNode {
    constructor(data, next) {
        this.data = data === undefined ? 0 : data;
        this.next = next === undefined ? null : next;
    }
}

class LinkedListStack {
    #stackPeek
    #stackSize

    constructor() {
        this.#stackPeek = null;
        this.#stackSize = 0;
    }

    getSize() {
        return this.#stackSize;
    }

    push(data) {
        const newNode = new ListNode(data);
        newNode.next = this.#stackPeek;
        this.#stackPeek = newNode;
        this.#stackSize++;
    }
    pop() {
        if (this.#stackPeek === null) {
            return null;
        }
        const data = this.#stackPeek.data;
        this.#stackPeek = this.#stackPeek.next;
        this.#stackSize--;
        return data;
    }

    peek() {
        if (this.#stackPeek === null) {
            return null;
        }
        return this.#stackPeek.data;
    }
}