import getByDot from 'get-by-dot';
import setByDot from 'set-by-dot';
import objectDotKeys from 'object-dot-keys';

const validate = (data, model) => {
  if(typeof data !== 'object' || typeof model !== 'object') {
    throw new Error('You have to provide a valid data and model.');
  }

  const defaultResult = { error: false, errors: {} };
  const dotKeys = objectDotKeys(model, { array: false });

  return dotKeys.reduce((prev, key) => {
    const validators = getByDot(model, key);
    const value = getByDot(data, key);
    const validatorsResult = validators
      .map(validator => validator(value))
      .filter(error => error);
    const hasMoreThanOneError = validatorsResult.length > 1;
    const hasErrorOnField = hasMoreThanOneError || validatorsResult.length > 0;
    const error = hasErrorOnField || prev.error;
    const fieldErrors = hasMoreThanOneError ? validatorsResult : validatorsResult[0];
    const errors = hasErrorOnField
      ? setByDot(prev.errors, key, fieldErrors)
      : prev.errors;

    return { error, errors };
  }, defaultResult);
};

export default validate;
