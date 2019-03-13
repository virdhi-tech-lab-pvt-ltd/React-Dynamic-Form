import _ from 'lodash';
import Schema from './schema';

const EMPTY_STRING = '';

export function isStringEmpty(str) {
  return (str || EMPTY_STRING).length === 0;
}

export function jsonErrorsToObject(errorsArray) {
  return  _.transform(errorsArray, (errorsObj, error) => {
    let path = error.dataPath.replace('/', '').replace(/\/([0-9]+)/, '[$1]').replace(/\//g, '.').replace(/^\./g, '');

    if (!_.get(errorsObj, path)) {
      _.set(errorsObj, path, error.message);
    }
  }, {});
}

export function validateSchema(data, schemaId) {
  let schema = Schema.getSchema(schemaId);
  let valid = schema(data);
  return valid ? null : jsonErrorsToObject(schema.errors);
  // return valid ? null : schema.errors;
}
