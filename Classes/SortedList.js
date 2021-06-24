class List {
    size = 0;
    constructor() {
        this.collection = [];
    }
    add(element) {
        this.collection.push(element);
        this.collection.sort((a, b) => a - b);
        this.size += 1;
    };
    remove(index) {
        if (index >= this.collection.length || index < 0) {
            throw new Error('Index outside of list length');
        } else {
            this.collection.splice(index, 1);
            this.collection.sort((a, b) => a - b);
            this.size -= 1;
        }
    }
    get(index) {
        if (index >= this.collection.length || index < 0) {
            throw new Error('Index outside of list length');
        } else {
            return this.collection[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); //6
list.remove(1);
console.log(list.get(1)); //7
console.log(list.size);