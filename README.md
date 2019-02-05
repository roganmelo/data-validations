# feathers-validation

⚓️ A Feathers Hook to validate data based on model.

<a href="https://nodei.co/npm/feathers-validation/">
  <img src="https://nodei.co/npm/feathers-validation.png?downloads=true">
</a>

[![NPM version](https://badge.fury.io/js/feathers-validation.png)](http://badge.fury.io/js/feathers-validation)
[![Build Status](https://travis-ci.org/roganmelo/feathers-validation.svg?branch=master)](https://travis-ci.org/roganmelo/feathers-validation)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/roganmelo/feathers-validation/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-10.15.x-brightgreen.svg?style=flat-square)](https://github.com/roganmelo/fn-spy/blob/master/package.json#L50)

### API
`import getByDot from 'feathers-validation';`

`getByDot({}, 'path');`


### Usage

```js
  import getByDot from 'feathers-validation';

  const obj = {
    a: { b: 'c' },
    b: [{ c: 'a' }]
  };

  getByDot(obj, 'a.b'); // c
  getByDot(obj, 'a'); // { b: 'c' }
  getByDot(obj, 'a.b.c'); // undefined
  getByDot(obj); // { a: { b: 'c' }, b: [{ c: 'a' }] };
```
