import {
  required,
  object,
  string,
  func,
  array,
  number,
  integer,
  float,
  date,
  dateString,
  boolean,
  max,
  min,
  oneOf,
  email
} from '../dist';

const valid = undefined;
const errorMessage = 'Error message.';
const invalid = errorMessage;

describe('feathers-validation validators', () => {
  describe('required', () => {
    const validator = required(errorMessage);

    it('should be valid if data has value.', () => {
      expect(validator('text')).toBe(valid);
    });

    it('should be invalid if data has no value.', () => {
      expect(validator('')).toBe(invalid);
    });
  });

  describe('object', () => {
    const validator = object(errorMessage);

    it('should be valid if data is an object.', () => {
      expect(validator({})).toBe(valid);
    });

    it('should be invalid if data isn\'t an object.', () => {
      expect(validator('text')).toBe(invalid);
    });
  });

  describe('string', () => {
    const validator = string(errorMessage);

    it('should be valid if data is a string.', () => {
      expect(validator('text')).toBe(valid);
    });

    it('should be invalid if data isn\'t a string.', () => {
      expect(validator(1)).toBe(invalid);
    });
  });

  describe('func', () => {
    const validator = func(errorMessage);

    it('should be valid if data is a function.', () => {
      expect(validator(() => {})).toBe(valid);
    });

    it('should be invalid if data isn\'t a function.', () => {
      expect(validator(1)).toBe(invalid);
    });
  });

  describe('array', () => {
    const validator = array(errorMessage);

    it('should be valid if data is an array.', () => {
      expect(validator([])).toBe(valid);
    });

    it('should be invalid if data isn\'t an array.', () => {
      expect(validator(1)).toBe(invalid);
    });
  });

  describe('number', () => {
    const validator = number(errorMessage);

    it('should be valid if data is a number.', () => {
      expect(validator(1)).toBe(valid);
    });

    it('should be invalid if data isn\'t a number.', () => {
      expect(validator('text')).toBe(invalid);
    });
  });

  describe('integer', () => {
    const validator = integer(errorMessage);

    it('should be valid if data is an integer.', () => {
      expect(validator(1)).toBe(valid);
    });

    it('should be invalid if data is a string.', () => {
      expect(validator('text')).toBe(invalid);
    });

    it('should be invalid if data is a float.', () => {
      expect(validator(1.2)).toBe(invalid);
    });
  });

  describe('float', () => {
    const validator = float(errorMessage);

    it('should be valid if data is a float.', () => {
      expect(validator(1.2)).toBe(valid);
    });

    it('should be invalid if data is a string.', () => {
      expect(validator('text')).toBe(invalid);
    });

    it('should be invalid if data is an integer.', () => {
      expect(validator(1)).toBe(invalid);
    });
  });

  describe('date', () => {
    const validator = date(errorMessage);

    it('should be valid if data is a date object.', () => {
      expect(validator(new Date())).toBe(valid);
    });

    it('should be invalid if data isn\'t a date object.', () => {
      expect(validator(1)).toBe(invalid);
    });
  });

  describe('dateString', () => {
    const validator = dateString(errorMessage);

    it('should be valid if data is a date string.', () => {
      expect(validator('2019-02-05T14:59:49.545Z')).toBe(valid);
    });

    it('should be invalid if data isn\'t a date string.', () => {
      expect(validator('text')).toBe(invalid);
    });
  });

  describe('boolean', () => {
    const validator = boolean(errorMessage);

    it('should be valid if data is a boolean.', () => {
      expect(validator(true)).toBe(valid);
    });

    it('should be invalid if data isn\'t a boolean.', () => {
      expect(validator('text')).toBe(invalid);
    });
  });

  describe('max', () => {
    const validator = max(4, errorMessage);

    it('should be valid if data has a maximum of 4 letters.', () => {
      expect(validator('text')).toBe(valid);
    });

    it('should be valid if data has a maximum of 4 items.', () => {
      expect(validator([1, 2, 3])).toBe(valid);
    });

    it('should be invalid if data has more than 4 letters.', () => {
      expect(validator('text with more than 4 letters')).toBe(invalid);
    });

    it('should be invalid if data has more than 4 items.', () => {
      expect(validator([1, 2, 3, 4, 5])).toBe(invalid);
    });
  });

  describe('min', () => {
    const validator = min(4, errorMessage);

    it('should be valid if data has at least 4 letters.', () => {
      expect(validator('text')).toBe(valid);
    });

    it('should be valid if data has at least 4 items.', () => {
      expect(validator([1, 2, 3, 4])).toBe(valid);
    });

    it('should be invalid if data has less than 4 letters.', () => {
      expect(validator('tex')).toBe(invalid);
    });

    it('should be invalid if data has less than 4 items.', () => {
      expect(validator([1, 2, 3])).toBe(invalid);
    });
  });

  describe('oneOf', () => {
    const validator = oneOf(['option1', 'option2'], errorMessage);

    it('should be valid if data is a valid option.', () => {
      expect(validator('option1')).toBe(valid);
    });

    it('should be valid if data is a valid option.', () => {
      expect(validator('option2')).toBe(valid);
    });

    it('should be invalid if data isn\'t a valid option.', () => {
      expect(validator('option3')).toBe(invalid);
    });
  });

  describe('email', () => {
    const validator = email(errorMessage);

    it('should be valid if data is a valid e-mail.', () => {
      expect(validator('roganmelo@gmail.com')).toBe(valid);
    });

    it('should be valid if data isn\'t a valid e-mail.', () => {
      expect(validator('roganmelo')).toBe(invalid);
    });

    it('should be valid if data isn\'t a valid e-mail.', () => {
      expect(validator('roganmelo@')).toBe(invalid);
    });

    it('should be valid if data isn\'t a valid e-mail.', () => {
      expect(validator('roganmelo@gmail')).toBe(invalid);
    });
  });
});
