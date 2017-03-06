/**
 * hs-enum
 *
 * Copyright © 2016 . All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import E from '../src/index';

describe('Enumeration', () => {

  describe('Basic usage', () => {
    const obj = { value: 0, key: 'ADMIN_ROLE', displayName: 'Admin' };
    const myEnum = new E([obj]);
    const keyFromVal = myEnum.findKeyFromValue(obj.value);
    const getFromVal = myEnum.getFromValue(obj.value);
    const val = myEnum.getValue(obj.key);
    const displayName = myEnum.getDisplayName(obj.key);
    const displayFromVal = myEnum.getDisplayNameFromValue(obj.value);

    it('Should be able to retrieve the value', () => {
      expect(myEnum.ADMIN_ROLE.value).to.be.equal(0);
    });

    it('Should be able to retrieve the displayName', () => {
      expect(myEnum.ADMIN_ROLE.displayName).to.be.equal(obj.displayName);
    });

    it('Should find the key from value', () => {
      expect(keyFromVal).to.be.equal(obj.key);
    });

    it('Should return the object from value', () => {
      expect(getFromVal).to.be.eql(obj);
    });

    it('Should return the value using getValue method', () => {
      expect(val).to.be.equal(obj.value);
    });

    it('Should return the displayName using getDisplayName method', () => {
      expect(displayName).to.be.equal(obj.displayName);
    });

    it('Should return the displayName using getDisplayNameFromValue method', () => {
      expect(displayFromVal).to.be.equal(obj.displayName);
    });
  });

  describe('Using primitives', () => {
    const myEnum = new E(['ADMIN_ROLE']);
    it('Should be able to create an enum using an array of strings', () => {
      expect(myEnum.ADMIN_ROLE.value).to.be.equal(0);
    });

    it('Should format the display name', () => {
      expect(myEnum.ADMIN_ROLE.displayName).to.be.equal('Admin Role');
    });
  });
});
