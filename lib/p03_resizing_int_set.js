
class ResizingIntSet {
  constructor(numBuckets = 20) {
    this.numBuckets = numBuckets;
    this.store = this.arrayOfBuckets(numBuckets);
    this.count = 0;
  }

  arrayOfBuckets(numBuckets) {
    const arr = new Array(numBuckets)
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array();
    }
    return arr;
  }

  include(num) {
    const bucket = this.bucketFor(num);
    return bucket.find(el => el === num) !== undefined;
  }

  insert(num) {
    if (this.include(num)) { return null; }
    this.bucketFor(num).push(num);
    this.count += 1;
    if (this.count > this.numBuckets) {
      this.resize();
    }
    return num;
  }

  remove(num) {
    if (this.include(num)) {
      const bucket = this.bucketFor(num);
      const idx = bucket.indexOf(num);
      bucket.splice(idx, 1);
      this.store[this.mod(num)] = bucket;
      return num;
    }
  }

  bucketFor(num) {
    const idx = this.mod(num);
    return this.store[idx];
  }

  mod(num) {
    return num % this.numBuckets;
  }

  flatten(arr) {
    const flat = [];
    arr.forEach(subArr => {
      subArr.forEach(el => flat.push(el));
    });
    return flat;
  }

  resize() {
    const oldStore = this.flatten(this.store);
    this.count = 0;
    this.numBuckets *= 2;
    this.store = this.arrayOfBuckets(this.numBuckets);
    oldStore.forEach(el => this.insert(el));
    return this.store;
  }
}

module.exports = {
  ResizingIntSet
};
