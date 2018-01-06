describe('MaxIntSet', () => {
  const { MaxIntSet } = require('../lib/p01_max_int_set');
  let maxIntSet;

  beforeEach(() => {
    maxIntSet = new MaxIntSet(5);
  });

  describe('MaxIntSet.prototype.constructor', () => {
    it('should initialize a store as an empty array', () => {
      expect(maxIntSet.store instanceof Array).toBeTruthy();
    });
  });

  describe('MaxIntSet.prototype.insert', () => {
    it('should store nums', () => {
      maxIntSet.insert(0);
      expect(maxIntSet.store[0]).toBeTruthy();
    });
    
    it('should not store numbers out of range', () => {
      maxIntSet.insert(10);
      expect(maxIntSet.include(10)).toBeFalsy();
    });
  });

  describe('MaxIntSet.prototype.include', () => {
    it('should return true if a num is stored', () => {
      maxIntSet.insert(0);
      expect(maxIntSet.include(0)).toBeTruthy();
    });
  
    it('should be falsey if no num is found', () => {
      expect(maxIntSet.include(0)).toBeFalsy();
    });
  });

  describe('MaxIntSet.prototype.remove', () => {
    it('should remove numbers', () => {
      maxIntSet.insert(1);
      maxIntSet.insert(2);
      // expect(maxIntSet.include(1)).toBeTruthy();
      // expect(maxIntSet.include(2)).toBeTruthy();
      maxIntSet.remove(1);
      expect(maxIntSet.include(1)).toBeFalsy();
    });
  });

});