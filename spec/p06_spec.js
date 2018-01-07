const { LinkedList } = require('../lib/p06_linked_list');

describe('LinkedList', () => {
  let list;
  let emptyList;
  const keyValPairs = {
    first: 1,
    second: 2,
    third: 3,
  };

  beforeEach(() => {
    emptyList = new LinkedList();
    list = new LinkedList();
    Object.keys(keyValPairs).forEach(key => (
      list.append(key, keyValPairs[key])
    ));
  });

  describe('LinkedList.prototype.empty', () => {
    it('checks whether an nodes have been inserted', () => {
      expect(emptyList.empty()).toBeTruthy();
      expect(list.empty()).toBeFalsy();
    });
  });

  describe('LinkedList.prototype.append', () => {
    it('appends nodes', () => {
      emptyList.append('first', 1);

      expect(emptyList.empty()).toBeFalsy();
    });

    it('appends nodes in order', () => {
      expect(list.first().key).toBe('first');
      expect(list.last().key).toBe('third');
    });
  });

  describe('LinkedList.prototype.include', () => {
    it('returns true if a key is present', () => {
      expect(list.include('first')).toBeTruthy();
    });

    it('returns false if a key is not in the list', () => {
      expect(list.include('fourth')).toBeFalsy();
    });
  });

  describe('LinkedList.prototype.get', () => {
    it('gets by key', () => {
      expect(list.get('first')).toBe(1);
      expect(list.get('second')).toBe(2);
      expect(list.get('third')).toBe(3);
    });

    it('returns null for absent keys', () => {
      expect(list.get('absent key')).toBe(null);
    });
  });

  describe('LinkedList.prototype.update', () => {
    it('updates nodes', () => {
      emptyList.append('first', 1);
      emptyList.update('first', 2);

      expect(emptyList.first().val).toBe(2);
    });

    it('does not add new nodes', () => {
      emptyList.update('first', 2);

      expect(emptyList.empty()).toBeTruthy();
    });
  });

  describe('LinkedList.prototype.remove', () => {
    it('removes a node by key', () => {
      expect(list.get('first')).toBe(1);
      list.remove('first');

      expect(list.get('first')).toBe(null);
    });

    it('reassigns pointers when nodes are removed', () => {
      list.remove('second');

      expect(list.first().next.key).toBe('third');
      expect(list.last().prev.key).toBe('first');
    });
  });

  describe('LinkedList.prototype.forEach', () => {
    it('enumerates over the nodes and passes each node to the callback', () => {
      const listKeys = Object.values(keyValPairs);
      const listKeysPassedToCallback = [];
      list.forEach(node => listKeysPassedToCallback.push(node.val));

      expect(listKeysPassedToCallback).toEqual(listKeys);
    });
  });
});
