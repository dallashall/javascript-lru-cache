describe('ResizingIntSet', () => {
  const { ResizingIntSet } = require('../lib/p03_resizing_int_set');
  let intSet;

  beforeEach(() => {
    intSet = new ResizingIntSet(5);
  });

  describe('ResizingIntSet.prototype.include', () => {
    it('should return false if the number has not been inserted', () => {
      expect(intSet.include(0)).toBeFalsy();
    });
    it('should return true if the number has been inserted', () => {
      intSet.insert(0);
      expect(intSet.include(0)).toBeTruthy();
    });
  });

  describe('ResizingIntSet.prototype.insert', () => {
    it('should be able to insert any numbers', () => {
      intSet.insert(10);
      expect(intSet.include(10)).toBeTruthy();
    });
  });

  describe('ResizingIntSet.prototype.remove', () => {
    it('should remove a number from the set', () => {
      intSet.insert(10);
      intSet.remove(10);
      expect(intSet.include(10)).toBeFalsy();
    });
  });

  describe('ResizingIntSet.prototype.resize', () => {
    it('calls resize then object count exceeds the number of buckets', () => {
      spyOn(intSet, 'resize');
      for (let i = 0; i < 6; i++) {
        intSet.insert(i);
      }
      expect(intSet.resize).toHaveBeenCalled();
    });
    it('resizes when the object count exceeds the number of buckets', () => {
      for (let i = 0; i < 6; i++) {
        intSet.insert(i);
      }
      expect(intSet.store.length).toBe(10);
    });
  });
  
});