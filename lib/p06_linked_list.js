class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }

  toString() {
    return `${this.key}: ${this.val}`;
  }

  remove(){
    this.next.prev = this.prev;
    this.prev.next = this.next;
  }
}

class LinkedList {
  constructor() {
    this.sentinel = new Node();
    this.sentinel.prev = this.sentinel;
    this.sentinel.next = this.sentinel;
    this.count = 0;

    return new Proxy(
      this,
      {
        get(target, props) {
          console.log(props);
          console.log('typeof', typeof props);
          const num = Number(props);
          if (!(Number.isNaN(num))) {
            return target.forEach((node, idx) => {
              if (num === idx) {
                console.log('GET number');
                return node;
              }
              console.log('Not found');
              return undefined;
            });
          }
          console.log('No number Entered.');
          return 'No number entered.';
        },
      },
    );
  }

  first() {
    return this.sentinel.next;
  }

  last() {
    return this.sentinel.prev;
  }

  empty() {
    return this.sentinel.next === this.sentinel;
  }

  get(key) {
    // this[key].val
  }

  include(key) {
    // this[key]
  }

  append(key, val) {
    const origPrev = this.last();
    const node = new Node(key, val);
    this.sentinel.prev = node;
    origPrev.next = node
    node.next = this.sentinel;
    node.prev = origPrev;
    this.count++;
  }

  update(key, val) {
    // if (this.include(key) {this[key].val = val;}
  }

  remove(key) {
    // node = this[key];
    // node.remove();
  }

  forEach(callBack) {
    if (this.empty()) { return null; }
    let currNode = this.sentinel.next;
    for (let i = 0; i < this.count; i++) {
      callBack(currNode, i);
      currNode = currNode.next;
    }
  }
}

let h = new LinkedList();
console.log(typeof 1);
console.log(h[1]);
console.log(h.the);
