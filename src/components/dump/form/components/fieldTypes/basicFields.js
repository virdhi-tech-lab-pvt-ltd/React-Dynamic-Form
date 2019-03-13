import {optionFieldType, fieldCategory, defaultTypes} from './template';

export const basicFields = [
  {
    fieldType: 'CheckBox',
    category: fieldCategory[0].name,
    ...optionFieldType
  }, {
    fieldType: 'DatePicker',
    category: fieldCategory[0].name,
    ...defaultTypes
  }, {
    fieldType: 'DropDown',
    category: fieldCategory[0].name,
    ...optionFieldType
  }, {
    fieldType: 'NumberField',
    category: fieldCategory[0].name,
    ...defaultTypes
  }, {
    fieldType: 'TextField',
    category: fieldCategory[0].name,
    ...defaultTypes
  }, {
    fieldType: 'RadioButton',
    category: fieldCategory[0].name,
    ...optionFieldType
  }
]
