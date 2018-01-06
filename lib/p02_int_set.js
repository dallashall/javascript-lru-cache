
class IntSet {
  constructor(numBuckets = 20) {
    this.numBuckets = numBuckets;
    this.store = this.arrayOfBuckets(numBuckets);
  }

  arrayOfBuckets(num_buckets) {
    const arr = new Array(num_buckets)
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
    return num;
  }

  remove(num) {
    if (this.include(num)) {
      let bucket = this.bucketFor(num);
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
}

module.exports = {
  IntSet
};
