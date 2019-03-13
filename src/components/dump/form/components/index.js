import React, { Component } from 'react';
import SeedFields from './SeedFields';
import { CreatedFormFields } from './CreatedFormFields';
import IphoneX from './IphoneXMockup';
import { formFieldCondition } from 'app/common/appConstants';
import FieldsStateHandlers from './FieldsStateHandlers';

export default class ComponentIndex extends Component {
  // componentWillMount() {
  //    this.props.actions.updateFormDetails(seedFields);
  // }

  render() {
    let { actions, form } = this.props, { formDetails, fieldOrder } = form;
    let stateHandlers = new FieldsStateHandlers(actions, form);
    return (<div className="col col-12 field-border-top py1">
      <div className="col col-2 form-left-content field-content">
        <SeedFields onAdd={(field) => stateHandlers.onAdd(field)} onDragStart={(e, data) => stateHandlers.onDragStart(e, data, null)} />
      </div>
      <div className="col col-6 form-center-content pl4 pr3 field-content" >
        <div className="col col-12 py3">
          <CreatedFormFields
            handleOptionChange={(fieldIndex, optionIndex, value) => stateHandlers.handleOptionChange(fieldIndex, optionIndex, value)}
            handleOptionDelete={(fieldIndex, optionIndex) => stateHandlers.handleOptionDelete(fieldIndex, optionIndex)}
            handleOptionAdd={(fieldIndex, option) => stateHandlers.handleOptionAdd(fieldIndex, option)}
            actions={actions}
            handleSettings={() => alert('settings')}
            onDelete={(index, fieldDetail) => stateHandlers.onDelete(index, fieldDetail)}
            onChange={(index, name, value, field) => stateHandlers.onChange(index, name, value, field)}
            onDragStart={(e, data, elementIndex) => stateHandlers.onDragStart(e, data, elementIndex)}
            addOrRemoveDummy={(index, type) => stateHandlers.addAndRemoveDummyCard(index, type)}
            onDrop={(e) => stateHandlers.onDrop(e)}
            allowDrop={(ev) => ev.preventDefault()}
            properties={form} />
        </div>
      </div>
      <div className="col col-3 form-right-content">
        <IphoneX
          actions={actions}
          properties={form} />
      </div>
    </div>)
  }
}

// onAdd={(field) => onAdd(field, formDetails, actions)}
