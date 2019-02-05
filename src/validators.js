const validator = (condition, message) => condition ? message : undefined;
const required = message => value => validator(!value, message);
const object = message => value => validator(value && typeof value !== 'object', message);
const string = message => value => validator(value && typeof value !== 'string', message);
const func = message => value => validator(value && typeof value !== 'function', message);
const array = message => value => validator(value && !Array.isArray(value), message);
const number = message => value => validator(value && typeof value !== 'number', message);
const integer = message => value => validator(value && !Number.isInteger(value), message);
const float = message => value => validator(value && !(value % 1), message);
const date = message => value => validator(
  value && !(value instanceof Date),
  message
);
const dateString = message => value => validator(
  value && Number.isNaN(new Date(value).valueOf()),
  message
);
const boolean = message => value => validator(
  value && typeof value !== 'boolean',
  message
);
const max = (maxLength, message) => value => validator(
  value && value.length > maxLength,
  message
);
const min = (minLength, message) => value => validator(
  value && value.length < minLength,
  message
);
const oneOf = (options, message) => value => validator(
  value && !options.includes(value),
  message
);
const email = message => value => validator(
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value),
  message
);

export {
  required,
  object,
  string,
  func,
  array,
  date,
  dateString,
  boolean,
  number,
  integer,
  float,
  max,
  min,
  oneOf,
  email
};
