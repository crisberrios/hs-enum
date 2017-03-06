
import startCase from 'lodash/startCase';

function getFromValue(val) {
  const key = this.findKeyFromValue(val);
  if (key === null) {
    throw new Error(`Value ${val} does not have a match`);
  }
  return this[key];
}
function findKeyFromValue(value) {
  for (const key of Object.keys(this)) {
    if (this[key].value === value) {
      return key;
    }
  }
  return null;
}
function getValue(key) {
  return this[key].value;
}
function getDisplayName(key) {
  return this[key].displayName;
}
function getDisplayNameFromValue(val) {
  return this.getFromValue(val).displayName;
}
export default class HeadspringEnumeration {
  constructor(values= []) {
    Object.defineProperty(this, 'getFromValue', {
      value: getFromValue,
      enumerable: false,
    });
    Object.defineProperty(this, 'findKeyFromValue', {
      value: findKeyFromValue,
      enumerable: false,
    });
    Object.defineProperty(this, 'getValue', {
      value: getValue,
      enumerable: false,
    });
    Object.defineProperty(this, 'getDisplayName', {
      value: getDisplayName,
      enumerable: false,
    });
    Object.defineProperty(this, 'getDisplayNameFromValue', {
      value: getDisplayNameFromValue,
      enumerable: false,
    });
    values.forEach((val, index) => {
      let obj;
      if (typeof val !== 'object') {
        obj = {
          value: index,
          displayName: startCase(val.toLowerCase()),
          key: val,
        };
      } else {
        const { value = index,
          key = value.toString(),
          displayName = startCase(key.toLowerCase()) } = val;
        obj = Object.assign({ value, key, displayName }, val);
      }
      if (!this.hasOwnProperty(obj.key)) {
        Object.freeze(obj);
        this[obj.key] = obj;
      } else {
        throw new Error(`You can't use the key ${obj.key}`);
      }
    });
    Object.freeze(this)
  }
}
