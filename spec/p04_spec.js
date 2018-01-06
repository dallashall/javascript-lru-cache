describe('Hashing', () => {
  require('../lib/p04_hashing');

  describe('String.prototype.hash', () => {
    let strOne, strTwo, strThree, strFour;
    beforeEach(() => {
      strOne = "abc";
      strTwo = "abc";
      strThree = "cba";
      strFour = "ab";
    });

    it('should hash to an integer', () => {
      expect(typeof strOne.hash()).toBe('number');
    });

    it('should produce the same hash for two identical strings', () => {
      expect(strOne.hash()).toEqual(strTwo.hash());
    });

    it('should produce different values for strings of different orderings', () => {
      expect(strOne.hash() === strThree.hash()).toBeFalsy();
    });

    it('should produce different values for substrings', () => {
      expect(strOne.hash() === strThree.hash()).toBeFalsy();
    });

    it('should handle empty strings', () => {
      let emptyStr = "";
      expect(typeof emptyStr.hash()).toBe('number');
    }); 
  });

  describe('Array.prototype.hash', () => {
    let arrOne, arrTwo, arrThree, arrFour;
    beforeEach(() => {
      arrOne = [1, 2, 3];
      arrTwo = [1, 2, 3];
      arrThree = [2, 3, 1];
      arrFour = [1, 2];
    });

    it('should hash to an integer', () => {
      expect(typeof arrOne.hash()).toBe('number');
    });

    it('should produce the same hash for two identical arrays', () => {
      expect(arrOne.hash()).toEqual(arrTwo.hash());
    });

    it('should produce different values for arrays of different orderings', () => {
      expect(arrOne.hash() === arrThree.hash()).toBeFalsy();
    });

    it('should produce different values for subarrays', () => {
      expect(arrOne.hash() === arrThree.hash()).toBeFalsy();
    });

    it('should handle empty arrays', () => {
      expect(typeof [].hash()).toBe('number');
    });
  });

  describe('Object.prototype.hash', () => {
    let objOne, objTwo, objThree, objFour;
    beforeEach(() => {
      objOne = [1, 2, 3];
      objTwo = [1, 2, 3];
      objThree = [2, 3, 1];
      objFour = [1, 2];
    });

    it('should hash to an integer', () => {
      expect(typeof objOne.hash()).toBe('number');
    });

    it('should produce the same hash for two identical objects', () => {
      expect(objOne.hash()).toEqual(objTwo.hash());
    });

    it('should produce different values for objects of different orderings', () => {
      expect(objOne.hash() === objThree.hash()).toBeFalsy();
    });

    it('should produce different values for subobjects', () => {
      expect(objOne.hash() === objThree.hash()).toBeFalsy();
    });

    it('should handle empty objects', () => {
      let emptyObj = {};
      expect(typeof emptyObj.hash()).toBe('number');
    }); 
  });
});
  