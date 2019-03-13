const defaultTypes = {
  fieldName: '',
  mandatory: false,
  important: 5
}
const optionFieldType = { ...defaultTypes,
  options: []
}

export const fieldCategory = [{
  name: 'basic',
  header: 'Basic Fields'
}, {
  name: 'general',
  header: 'General Fields'
}, {
  name: 'advanced',
  header: 'Advanced Fields'
}];

export const fieldTypes = [{
    fieldType: 'CheckBox',
    category: fieldCategory[0].name,
    ...optionFieldType
  },
  {
    fieldType: 'DatePicker',
    category: fieldCategory[0].name,
    ...defaultTypes
  },
  {
    fieldType: 'DropDown',
    category: fieldCategory[0].name,
    ...optionFieldType
  },
  {
    fieldType: 'ImageUpload',
    category: fieldCategory[1].name,
    ...defaultTypes
  },
  {
    fieldType: 'AudioUpload',
    category: fieldCategory[1].name,
    ...defaultTypes
  },
  {
    fieldType: 'VideoUpload',
    category: fieldCategory[1].name,
    ...defaultTypes
  },
  {
    fieldType: 'NumberField',
    category: fieldCategory[0].name,
    ...defaultTypes
  },
  {
    fieldType: 'TextField',
    category: fieldCategory[0].name,
    ...defaultTypes
  },
  {
    fieldType: 'TextArea',
    category: fieldCategory[1].name,
    ...defaultTypes
  },
  {
    fieldType: 'RadioButton',
    category: fieldCategory[0].name,
    ...optionFieldType
  },
  {
    fieldType: 'SearchBar',
    category: fieldCategory[1].name,
    ...defaultTypes
  }
]
