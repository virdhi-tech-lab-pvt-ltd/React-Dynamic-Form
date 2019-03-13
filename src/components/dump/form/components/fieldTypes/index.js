import {basicFields} from './basicFields';
import {generalFields} from './generalFields';
import {advancedFields} from './advancedFields';
import {fieldCategory} from './template';

export const fieldsCategory = fieldCategory;
export const fieldTypes = [
  ...basicFields,
  ...generalFields,
  ...advancedFields
];
