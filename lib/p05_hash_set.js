require('./p04_hashing');

class HashSet {
  constructor(numBuckets = 5) {
    this.count = 0;
    this.numBuckets = numBuckets;
    this.store = this.arrayOfBuckets(numBuckets);
  }

  arrayOfBuckets(numBuckets) {
    const arr = new Array(numBuckets);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array();
    }
    return arr;
  }

  include(el) {
    const bucket = this.bucketFor(el);
    return bucket.find(ea => ea === el) !== undefined;
  }

  remove(el) {
    if (this.include(el)) {
      const bucket = this.bucketFor(el);
      const idx = bucket.indexOf(el);
      bucket.splice(idx, 1);
      this.store[this.mod(el)] = bucket;
      this.count -= 1;
      return el;
    }
    return null;
  }

  insert(el) {
    if (this.include(el)) { return null; }
    this.bucketFor(el).push(el);
    this.count += 1;
    if (this.count > this.numBuckets) {
      this.resize();
    }
    return el;
  }

  bucketFor(el) {
    const idx = this.mod(el);
    return this.store[idx];
  }

  resize() {
    const oldStore = this.flatten(this.store);
    this.count = 0;
    this.numBuckets *= 2;
    this.store = this.arrayOfBuckets(this.numBuckets);
    oldStore.forEach(el => this.insert(el));
    return this.store;
  }

  flatten(arr) {
    const flat = [];
    arr.forEach((subArr) => {
      subArr.forEach(el => flat.push(el));
    });
    return flat;
  }

  mod(el) {
    return Math.abs(el.hash() % this.numBuckets);
  }
}

module.exports = {
  HashSet,
};
