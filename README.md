# data-validations

✅ A function to validate data using validators.

<a href="https://nodei.co/npm/data-validations/">
  <img src="https://nodei.co/npm/data-validations.png?downloads=true">
</a>

[![NPM version](https://badge.fury.io/js/data-validations.png)](http://badge.fury.io/js/data-validations)
[![Build Status](https://travis-ci.org/roganmelo/data-validations.svg?branch=master)](https://travis-ci.org/roganmelo/data-validations)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/roganmelo/data-validations/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-10.15.x-brightgreen.svg?style=flat-square)](https://github.com/roganmelo/fn-spy/blob/master/package.json#L50)

### API
`import validate from 'data-validations';`

`validate(data, model);`


### Usage

```js
  import validate, { required, min, max } from 'data-validations';

  const data = { name: 'Rogan' };
  const dataWithEmptyName = { name: '' };
  const model = { name: [required('Name is required.')] };
  const modelWithMinAndMax = {
    name: [
      min(6, 'Name must be at least 6 letters.'),
      max(4, 'Name must have a maximum of 4 letters.')
    ]
  };

  validate(data, model); // { error: false, errors: {} }
  validate(dataWithEmptyName, model); // { error: true, errors: { name: 'Name is Required.' } }
  validate(data, modelWithMinAndMax) // { error: true, errors: { name: ['Name must be at least 6 letters.', 'Name must have a maximum of 4 letters.'] } }
```

### Validators

If the validator returns undefined it means that the value is valid, and if return string it means that the value is invalid and the string is used as an error message.

- required: (message: String) => (value) => String | undefined
- object: (message: String) => (value) => String | undefined
- string: (message: String) => (value) => String | undefined
- func: (message: String) => (value) => String | undefined
- array: (message: String) => (value) => String | undefined
- date: (message: String) => (value) => String | undefined
- dateString: (message: String) => (value) => String | undefined
- boolean: (message: String) => (value) => String | undefined
- number: (message: String) => (value) => String | undefined
- integer: (message: String) => (value) => String | undefined
- float: (message: String) => (value) => String | undefined
- max: (maxLength: Integer, message: String) => (value) => String | undefined
- min: (minLength: Integer, message: String) => (value) => String | undefined
- oneOf: (options: Array, message: String) => (value) => String | undefined
- email: (message: String) => (value) => String | undefined

### Creating your validator

```js
  import validate from 'data-validations';

  const data = { name: 'Rogan' };
  const dataWithEmptyName = { name: '' };
  const myValidator = value => !value ? 'Name is required.' : undefined;
  const model = { name: [myValidator] };

  validate(data, model); // { error: false, errors: {} }
  validate(dataWithEmptyName, model); // { error: true, errors: { name: 'Name is Required.' } }
```
