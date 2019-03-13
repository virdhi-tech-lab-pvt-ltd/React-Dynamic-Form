export const defaultTypes = {
  fieldName: '',
  labelName:'',
  mandatory: false,
  important: 5
}

export const optionFieldType = {
  ...defaultTypes,
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
