class MaxIntSet {
  constructor(max) {
    this.max = max;
    this.store = new Array(max);
  }

  insert(num) {
    if (num < 0 || num > this.max) { return null; }
    this.store[num] = true;
    return num;
  }

  remove(num) {
    this.store = this.store.splice(num, 1);
    return num;
  }

  include(num) {
    return this.store[num];
  }
}

module.exports = {
  MaxIntSet,
};
