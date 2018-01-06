describe('IntSet', () => {
  const { IntSet } = require('../lib/p02_int_set');
  let intSet;
  beforeEach(() => {
    intSet = new IntSet(5);
  });
  
  describe('IntSet.prototype.include', () => {
    it('should return false if the number has not been inserted', () => {
      expect(intSet.include(0)).toBeFalsy();
    });
    it('should return true if the number has been inserted', () => {
      intSet.insert(0);
      expect(intSet.include(0)).toBeTruthy();
    });
  });

  describe('IntSet.prototype.insert', () => {
    it('should be able to insert any numbers', () => {
      intSet.insert(10);
      expect(intSet.include(10)).toBeTruthy();
    });
  });

  describe('IntSet.prototype.remove', () => {
    it('should remove a number from the set', () => {
      intSet.insert(10);
      intSet.remove(10);
      expect(intSet.include(10)).toBeFalsy();
    });
  });
});
