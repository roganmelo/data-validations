import validate from '../dist';

const max = (maxLength, message) => value => value && value.length > maxLength
  ? message
  : undefined;
const min = (minLength, message) => value => value && value.length < minLength
  ? message
  : undefined;
const required = message => value => !value ? message : undefined;

describe('feathers-validation hook', () => {
  it('should throw an error if pass invalid data or model.', () => {
    const error = new Error('You have to provide a valid data and model.');

    expect(() => validate(1)).toThrowError(error);
    expect(() => validate('obj')).toThrowError(error);
    expect(() => validate({}, 1)).toThrowError(error);
    expect(() => validate({}, 'obj')).toThrowError(error);
  });

  it('should return error false and no errors if validation is ok.', () => {
    const nameValidationMessage = 'Name is required.';
    const data = { name: 'Rogan' };
    const model = { name: [required(nameValidationMessage)] };
    const result = { error: false, errors: {} };

    expect(validate(data, model)).toEqual(result);
  });

  it('should return error true and errors if validation is ok.', () => {
    const data = { age: 24 };
    const nameValidationMessage = 'Name is required.';
    const model = { name: [required(nameValidationMessage)] };
    const result = {
      error: true,
      errors: { name: nameValidationMessage }
    };

    expect(validate(data, model)).toEqual(result);
  });

  it('should return error true and errors in multiple fields.', () => {
    const data = { birth: '1994-03-02T21:59:39.884Z' };
    const nameValidationMessage = 'Name is required.';
    const ageValidationMessage = 'Age is required.';
    const model = {
      name: [required(nameValidationMessage)],
      age: [required(ageValidationMessage)]
    };
    const result = {
      error: true,
      errors: {
        name: nameValidationMessage,
        age: ageValidationMessage
      }
    };

    expect(validate(data, model)).toEqual(result);
  });

  it('should return error true and multiples errors in one fields.', () => {
    const data = { name: 'Rogan' };
    const nameMaxValidationMessage = 'Name must be at most 4.';
    const nameMinValidationMessage = 'Name must be at least 6.';
    const model = {
      name: [max(4, nameMaxValidationMessage), min(6, nameMinValidationMessage)]
    };
    const result = {
      error: true,
      errors: {
        name: [nameMaxValidationMessage, nameMinValidationMessage]
      }
    };

    expect(validate(data, model)).toEqual(result);
  });
});
