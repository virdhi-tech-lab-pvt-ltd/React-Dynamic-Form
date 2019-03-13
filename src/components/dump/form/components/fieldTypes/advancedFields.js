import {fieldCategory, defaultTypes} from './template';

export const advancedFields = [
  {
    fieldType: 'ImageUpload',
    category: fieldCategory[2].name,
    ...defaultTypes
  }, {
    fieldType: 'AudioUpload',
    category: fieldCategory[2].name,
    ...defaultTypes
  }, {
    fieldType: 'VideoUpload',
    category: fieldCategory[2].name,
    ...defaultTypes
  }, {
    fieldType: 'TextArea',
    category: fieldCategory[2].name,
    ...defaultTypes
  }, {
    fieldType: 'SearchBar',
    category: fieldCategory[2].name,
    ...defaultTypes
  }
]
