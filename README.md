# [Headspring Enumeration](https://github.com/crisberrios/hs-enum)

[![NPM version](http://img.shields.io/npm/v/hs-enum.svg?style=flat-square)](https://www.npmjs.com/package/hs-enum)
[![NPM downloads](http://img.shields.io/npm/dm/hs-enum.svg?style=flat-square)](https://www.npmjs.com/package/hs-enum)
[![Build Status](http://img.shields.io/travis//hs-enum/master.svg?style=flat-square)](https://travis-ci.org/crisberrios/hs-enum)
[![Coverage Status](https://img.shields.io/coveralls//hs-enum.svg?style=flat-square)](https://coveralls.io/crisberrios/hs-enum)
[![Dependency Status](http://img.shields.io/david//hs-enum.svg?style=flat-square)](https://david-dm.org/crisberrios/hs-enum)

### How to Install

```sh
$ npm install hs-enum
```

### Getting Started

```js
import E from 'hs-enum'
const myEnum = new E([
    { key: 'HELLO_MESSAGE',
      value: 0,
      displayName: 'Hello JavaScripters!'
    }
}])

const val = myEnum.HELLO_MESSAGE.value // 0
const key = myEnum.findKeyFromValue(0) // 'HELLO_MESSAGE'
const name = myEnum.getDisplayNameFromValue(0) // 'Hello JavaScripters!'
const obj = myEnum.getFromValue(0) // {key: 'HELLO_MESSAGE', value: 0, displayName: 'Hello JavaScripters!'}
const val2 = myEnum.getValue('HELLO_MESSAGE') // 0
const displayName2 = myEnum.getDisplayName('HELLO_MESSAGE') // 'Hello JavaScripters!'

//Using an array of strings
const myOtherEnum = new E(['HELLO_JAVASCRIPTERS'])

//Start case conversion
const myFormattedDisplayName = myOtherEnum.HELLO_JAVASCRIPTERS.displayName // 'Hello Javascripters'
const indexValue = myOtherEnum.HELLO_JAVASCRIPTERS.value // 0 (index)
```

### License

MIT © 2016
