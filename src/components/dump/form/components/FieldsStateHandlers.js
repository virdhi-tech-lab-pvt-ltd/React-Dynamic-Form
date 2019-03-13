export default class FieldsStateHandlers {

  constructor(...args) {
    let [actions, form] = args;
    this.actions = actions;
    this.form = form;
    this.formDetails = form.formFields;
    this.fieldOrder = form.fieldOrder;
  }

  onDragStart(...args) {
    try {
      let [e, dataObject, elementIndex] = args;
      e.dataTransfer.dropEffect = "move";
      let data = JSON.stringify(dataObject);
      e.dataTransfer.setData("data", data);
      if (elementIndex) {
        this.actions.changeFieldOrder(elementIndex);
      }
    } catch (err) {
      console.log(err);
    } finally {}
  }

  addAndRemoveDummyCard(index, type) {
    try {
      let dummy = {
        fieldType: ''
      };
      let cloneDetails = [...this.formDetails];
      if (type == 'add') {
        let changeIndex = index === cloneDetails.length - 1 ?
          index + 1 :
          index;
        cloneDetails = cloneDetails.filter(cd => cd.fieldType.length != 0);
        cloneDetails.splice(changeIndex, 0, dummy);
      } else {
        cloneDetails.splice(index, 1);
      }
      this.actions.updateFormDetails(cloneDetails);
    } catch (err) {
      console.log(err);
    } finally {}
  }

  onDrop(e) {
    try {
      e.preventDefault();
      let jsonData = JSON.parse(e.dataTransfer.getData("data"));
      let cloneDetails = [...this.formDetails];
      let index = cloneDetails.findIndex(cD => cD.fieldType.length == 0);
      let totalFieldLen = cloneDetails.filter(cD => cD.fieldType == jsonData.fieldType).length;
      let dropObject = {
        ...jsonData,
        id: `${jsonData.fieldType}_${totalFieldLen}`
      };
      if (!this.fieldOrder) {
        if (index >= 0) {
          cloneDetails.splice(index, 0, dropObject);
        } else {
          cloneDetails = [
            ...cloneDetails,
            ...[dropObject]
          ];
        }
        cloneDetails = cloneDetails.filter(cD => cD.fieldType.length != 0);
        this.actions.changeFieldOrder(null);
        this.actions.updateFormDetails(cloneDetails);
      } else {
        this.moveDrop(e);
      }
    } catch (err) {
      console.log(err);
    } finally {}
  }

  moveDrop(e) {
    try {
      let jsonData = JSON.parse(e.dataTransfer.getData("data"));
      let cloneDetails = [...this.formDetails];
      cloneDetails = cloneDetails.filter(cD => cD.id != this.fieldOrder);
      let index = cloneDetails.findIndex(cD => cD.fieldType.length == 0);
      cloneDetails.splice(index, 0, jsonData);
      cloneDetails = cloneDetails.filter(cD => cD.fieldType.length != 0);
      this.actions.changeFieldOrder(null);
      this.actions.updateFormDetails(cloneDetails);
    } catch (err) {
      console.log(err);
    } finally {}
  }

  onAdd(field) {
    try {
      let totalFieldLen = this.formDetails.filter(cD => cD.fieldType == field.fieldType).length;
      let addObject = {
        ...field,
        id: `${field.fieldType}_${totalFieldLen}`
      };
      let cloneDetails = [
        ...this.formDetails,
        ...[addObject]
      ];
      this.actions.updateFormDetails(cloneDetails);
    } catch (err) {
      console.log(err);
    } finally {}
  }

  onDelete(index) {
    try {
      let cloneDetails = [...this.formDetails];
      cloneDetails.splice(index, 1);
      this.actions.updateFormDetails(cloneDetails);
    } catch (err) {
      console.log(err);
    } finally {}
  }

  handleOptionAdd(fieldIndex, option) {
    try {
      let cloneDetails = [...this.formDetails];
      let optionField = cloneDetails[fieldIndex];
      optionField.options = [...optionField.options, ...[option]];
      this.commonOptionUpdate(cloneDetails, optionField, fieldIndex);
    } catch (err) {
      console.log(err);
    } finally {}
  }

  handleOptionDelete(fieldIndex, optionIndex) {
    try {
      let cloneDetails = [...this.formDetails];
      let optionField = cloneDetails[fieldIndex];
      let {
        options
      } = optionField;
      options.splice(optionIndex, 1);
      optionField.options = options;
      this.commonOptionUpdate(cloneDetails, optionField, fieldIndex);
    } catch (err) {
      console.log(err);
    } finally {}
  }

  commonOptionUpdate(cloneDetails, optionField, fieldIndex) {
    try {
      cloneDetails.splice(fieldIndex, 1);
      cloneDetails.splice(fieldIndex, 0, optionField);
      this.actions.updateFormDetails(cloneDetails);
    } catch (err) {
      console.log(err);
    } finally {}
  }

  handleOptionChange(fieldIndex, optionIndex, value) {
    try {
      let cloneDetails = [...this.formDetails];
      let optionField = cloneDetails[fieldIndex];
      let {
        options
      } = optionField;
      options.splice(optionIndex, 1);
      options.splice(optionIndex, 0, value);
      optionField.options = options;
      this.commonOptionUpdate(cloneDetails, optionField, fieldIndex);
    } catch (err) {
      console.log(err);
    } finally {}
  }

  onChange(index, name, value, field) {
    let textInput = ['fieldName', 'mandatory', 'important'];
    let cloneDetails = [...this.formDetails];
    let newDetails = cloneDetails[index];

    if (textInput.includes(name)) {
      let cloneField = {
        ...field
      };
      cloneField[name] = value;
      cloneField['labelName'] = value.charAt(0).toLowerCase()+value.slice(1).replace(/ +/g, "");
      newDetails = cloneField
    }
    cloneDetails.splice(index, 1);
    cloneDetails.splice(index, 0, newDetails);
    this.actions.updateFormDetails(cloneDetails)
  }
}
