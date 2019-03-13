import React from 'react';
import _ from 'lodash';
import { Icon, Input, Label } from 'semantic-ui-react';
import { ImageIndex } from './ImageIndex';
import './css/create-form-fields.css';
import { formFieldCondition } from 'app/common/appConstants';
import NewFieldOption from './NewFieldOption';

const RenderFieldName = (props) => {
  let { fieldDetail, onChange } = props;
  return (<div className="col col-8">
    <span className="col col-1">{ImageIndex(fieldDetail.fieldType)}</span>
    <span className="col col-11 px2"><Input className="form-create-input" value={fieldDetail.fieldName} onChange={(e, v) => onChange(v.value)} autoFocus="autoFocus" placeholder='Enter...' /></span>
  </div>)
}

const RenderMenu = ({ onDelete, handleSettings }) => <span className="col col-3 py1 right-align">
  <Icon className="field-option-icon setting pr2" name='setting' onClick={() => handleSettings()} size='large' />
  <Icon className="pr2 field-option-icon click" size='large' onClick={() => onDelete()} name='trash' />
  <Icon className="field-option-icon" name='move' size='large' />
</span>

const RenderOptionList = (props) => {
  let { optionList, actions, optionName, handleOptionAdd, handleOptionDelete, handleOptionChange } = props;
  return (<div className="col col-12">
    <div className="col col-4 px1 pt1">
      <NewFieldOption handleOptionAdd={(option) => handleOptionAdd(option)} />
    </div>
    {
      optionList.map((option, i) => {
        return <div className="col col-4 px1 pt1">
          <div className="col col-12 option-border">
            <div className="col col-2 input-option-padding center-align" style={{ color: '#E91E63', fontSize: '1.7rem' }}>{i + 1}</div>
            <div className="col col-8"><Input className="col col-12 input-option" value={option} onChange={(e, v) => handleOptionChange(i, v.value)} placeholder='Option...' /></div>
            <div className="col col-2 input-option-padding center-align"><Icon onClick={() => handleOptionDelete(i)} name='trash' /></div>
          </div>
        </div>
      })
    }
  </div>);
}

const RenderDropComponent = ({ addOrRemoveDummy, allowDrop }) => <div onDragLeave={() => addOrRemoveDummy()} onDragOver={(e) => allowDrop(e)} className="col col-12 pb2">
  <div className="col col-12 drop p3">
    DROP YOUR FIELD HEAR
  </div>
</div>

const RenderDraggableComponent = (props) => {
  let {
    fieldDetail,
    onChange,
    onDragStart,
    addOrRemoveDummy,
    allowDrop,
    handleSettings,
    onDelete,
    actions,
    optionName,
    handleOptionAdd,
    handleOptionDelete,
    handleOptionChange
  } = props;
  return (<div draggable="true" onDragStart={(e) => onDragStart(e)} onDragEnter={() => addOrRemoveDummy()} onDragOver={(e) => allowDrop(e)} className="col col-12 pb2 text-left">
    <div className="col col-12 field-card p1">
      <div className="col col-12">
        <RenderFieldName fieldDetail={fieldDetail} onChange={(value) => onChange(value)} />
        <RenderMenu handleSettings={() => handleSettings()} onDelete={() => onDelete()} />
      </div>
      <div className="col col-12" style={{
        paddingLeft: '3.3rem'
      }}>
        {formFieldCondition.includes(fieldDetail.fieldType) && <RenderOptionList
          handleOptionChange={(optionIndex, value) => handleOptionChange(optionIndex, value)}
          handleOptionDelete={(optionIndex) => handleOptionDelete(optionIndex)}
          handleOptionAdd={(option) => handleOptionAdd(option)}
          optionList={fieldDetail.options}
          optionName={optionName}
          actions={actions} />}
      </div>
    </div>
  </div>)
}

const emptyComponent = () => <div className="col col-12 drop p3">
  DRAG AND DROP YOUR FIELDS
</div>

export const CreatedFormFields = (props) => {
  let {
    properties,
    allowDrop,
    onDrop,
    addOrRemoveDummy,
    onDragStart,
    handleSettings,
    onDelete,
    onChange,
    actions,
    handleOptionAdd,
    handleOptionDelete,
    handleOptionChange
  } = props;
  return (<div className="col col-12 pr2 over-flow-y center-align col col-12 overflow-y" style={{ height: '80vh' }} onDrop={(e) => onDrop(e)} onDragOver={(e) => allowDrop(e)}>
    {!_.isEmpty(properties.formFields) && properties.formFields.map((fieldDetail, i) => {
      if (fieldDetail.fieldType.length !== 0) {
        return (<RenderDraggableComponent
          handleOptionChange={(optionIndex, value) => handleOptionChange(i, optionIndex, value)}
          handleOptionDelete={(optionIndex) => handleOptionDelete(i, optionIndex)}
          handleOptionAdd={(option) => handleOptionAdd(i, option)}
          optionName={properties.optionName}
          actions={actions}
          fieldDetail={fieldDetail}
          onChange={(value) => onChange(i, 'fieldName', value, fieldDetail)}
          handleSettings={() => handleSettings()}
          onDelete={() => onDelete(i, fieldDetail)}
          onDragStart={(e) => onDragStart(e, fieldDetail, fieldDetail.id)}
          addOrRemoveDummy={() => addOrRemoveDummy(i, 'add')}
          allowDrop={(e) => allowDrop(e)} />)
      } else {
        return (<RenderDropComponent addOrRemoveDummy={() => addOrRemoveDummy(i, 'remove')} allowDrop={(e) => allowDrop(e)} />)
      }
    })
    }
    {_.isEmpty(properties.formFields) && emptyComponent()}
  </div>)
}
