// Based on http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
Object.prototype.hashString = function hashString(string) {
  let hash = 0;
  if (string.length === 0) return hash;
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    hash = ( (hash << 5) - hash) + charCode;
    hash = hash & hash;
  }
  return hash;
};

Array.prototype.hash = function hashArray() {
  const stringFromArray = `arr: [ ${this} ]`;
  return this.hashString(stringFromArray);
};

Object.prototype.hash = function hashObject() {
  const keys = Object.keys(this);
  const values = [];
  for (let i = 0; i < keys.length; i++) {
    values.push(this[ keys[i] ]);
  }
  const objectString = `obj: { keys: ${keys}, values: ${values} }`;
  return this.hashString(objectString);
};

Number.prototype.hash = function hashNumber() {
  const numberString = `number: ${this}`;
  return this.hashString(numberString);
};
