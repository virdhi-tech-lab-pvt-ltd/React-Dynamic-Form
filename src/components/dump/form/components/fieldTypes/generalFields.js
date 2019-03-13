import {optionFieldType, fieldCategory, defaultTypes} from './template';
import {bloodGroup, country, gender, relationship} from './seedOptions';

export const generalFields = [
  {
    fieldType: 'CheckBox',
    category: fieldCategory[1].name,
    ...optionFieldType,
    options: bloodGroup,
    fieldName: 'Blood Group'
  }, {
    fieldType: 'DropDown',
    category: fieldCategory[1].name,
    ...optionFieldType,
    options: country,
    fieldName: 'Country'
  }, {
    fieldType: 'RadioButton',
    category: fieldCategory[1].name,
    ...optionFieldType,
    options: gender,
    fieldName: 'Gender'
  }, {
    fieldType: 'RadioButton',
    category: fieldCategory[1].name,
    ...optionFieldType,
    options: relationship,
    fieldName: 'Relationship'
  }, {
    fieldType: 'NumberField',
    category: fieldCategory[1].name,
    ...defaultTypes,
    fieldName: 'Rating'
  }
]
