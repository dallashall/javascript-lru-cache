describe('HashSet', () => {
  const { HashSet } = require('../lib/p05_hash_set');

  let hashSet;
  
  beforeEach(() => {
    hashSet = new HashSet(5);
  });

  describe('HashSet.prototype.include', () => {
    it('should return false unless an element has been inserted', () => {
      expect(hashSet.include(1)).toBeFalsy();
    });

    it('should return true if an element has been inserted', () => {
      hashSet.insert(1);
      expect(hashSet.include(1)).toBeTruthy();
    })
  });

  describe('HashSet.prototype.insert', () => {
    it('should correctly insert any kind of element', () => {
      let num = 101;
      let string = "a";
      let obj = { b: "b" };
      let arr = [1,2,3];

      hashSet.insert(num);
      hashSet.insert(string);
      hashSet.insert(obj);
      hashSet.insert(arr);

      expect(hashSet.include(num)).toBeTruthy();
      expect(hashSet.include(string)).toBeTruthy();
      expect(hashSet.include(obj)).toBeTruthy();
      expect(hashSet.include(arr)).toBeTruthy();
    });
  });

  describe('HashSet.prototype.remove', () => {
    it('should remove an element from the set', () => {
      let obj = { a: "a" };
      hashSet.insert(obj);
      hashSet.remove(obj);

      expect(hashSet.include(obj)).toBeFalsy();
    });
  });
  
  describe('HashSet.prototype.count', () => {
    it('should keep track of how many entries the set has', () => {
      expect(hashSet.count).toBe(0);
      for (let i = 0; i < 5; i++) {
        hashSet.insert(i);
      }
      expect(hashSet.count).toBe(5);
    });
  });

  describe('HashSet.prototype.resize', () => {
    it('calls resize when the object count exceeds the number of buckets', () => {
      spyOn(hashSet, 'resize');
      for (let i = 0; i < 6; i++) {
        hashSet.insert(i);
      }
      expect(hashSet.resize).toHaveBeenCalled();
    });
    it('resizes when the object count exceeds the number of buckets', () => {
      for (let i = 0; i < 6; i++) {
        hashSet.insert(i);
      }
      expect(hashSet.store.length).toBe(10);
    });
  });
});
