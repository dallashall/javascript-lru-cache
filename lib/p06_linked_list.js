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

  remove() {
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

    // Adds bracket capabilites to access properties by name
    // but it does so at the cost of iterating over each value
    // before calling a method, because Proxy makes no
    // distinction between bracket and dot notation for props.
    // return new Proxy(
    //   this,
    //   {
    //     get(target, props) {
    //       const reg = /^\d$/; // Quick check for number
    //       let propKey = props;
    //       if (reg.test(props)) propKey = parseInt(props, 10);
    //       console.log('Searching for: ', propKey);
    //       let currNode = target.first();
    //       for (let idx = 0; idx < target.count; idx++) {
    //         if (currNode.key === propKey) return currNode.val;
    //         currNode = currNode.next();
    //       }
    //       console.log('Not found: ', props);
    //       console.log('Property: ', props);
    //       const builtInFunction = target[props];
    //       console.log('Instance function:', builtInFunction);
    //       if (builtInFunction) return builtInFunction;
    //       return null;
    //     },
    //   },
    // );
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

  getNode(key) {
    if (this.empty()) return null;
    let currNode = this.first();
    for (let idx = 0; idx < this.count; idx++) {
      if (currNode.key === key) return currNode;
      currNode = currNode.next;
    }
    return null;
  }

  get(key) {
    const node = this.getNode(key);
    return node ? node.val : null;
  }

  include(key) {
    return Boolean(this.getNode(key));
  }

  append(key, val) {
    const origPrev = this.last();
    const node = new Node(key, val);
    this.sentinel.prev = node;
    origPrev.next = node;
    node.next = this.sentinel;
    node.prev = origPrev;
    this.count += 1;
    return this;
  }

  update(key, val) {
    const node = this.getNode(key);
    if (node) {
      node.val = val;
      return val;
    }
    return null;
  }

  remove(key) {
    const node = this.getNode(key);
    if (!node) return null;
    node.remove();
    return this;
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

module.exports = { LinkedList };
