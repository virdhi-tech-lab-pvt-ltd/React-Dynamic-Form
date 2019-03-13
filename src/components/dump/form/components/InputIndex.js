import React from 'react';
import _ from 'lodash';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {Checkbox, Dropdown, Input, TextArea, Radio} from 'semantic-ui-react';

export const InputCheckBox = (data) => <div className="col col-12 pt1">
  <div className="col col-12 py1 heading">{
      data.fieldName.length != 0
        ? data.fieldName
        : '. . .'
    }</div>
  <div className="col col-12 mobile-card px1">
    {
      data.options.map(op => <Checkbox style={{
          color: 'gray'
        }} className="col col-12 py1 px1" label={op}/>)
    }
    {_.isEmpty(data.options) && <div className="col col-12  p1">No Options Found</div>}
  </div>
</div>

export const InputDatePicker = (data) => <div className="col col-12  pt1">
  <div className="col col-12 py1 heading">{
      data.fieldName.length != 0
        ? data.fieldName
        : '. . .'
    }</div>
  <div className="col col-12 "><input className="mobile-card" style={{
    width: '100%',
    padding: '5px 3px 5px 11px'
  }} type="date"/></div>
</div>

export const InputDropDown = (data) => {
  let options = data.options.map(d => ({key: d, value: d, text: d}));
  return (<div className="col col-12 pt1">
    <div className="col col-12 py1 heading">{
        data.fieldName.length != 0
          ? data.fieldName
          : '. . .'
      }</div>
    <div className="col col-12">
      <Dropdown placeholder='Select...' fluid="fluid" selection="selection" options={options} style={{
          paddingTop: '7px'
        }}/>
    </div>
  </div>)
}

export const InputImageUpload = (data) => <div className="col col-12 pt1">
  <div className="col col-12 py1 heading">{
      data.fieldName.length != 0
        ? data.fieldName
        : '. . .'
    }</div>
  <div className="col col-12 mobile-card p2">ImageUpload</div>
</div>

export const InputAudioUpload = (data) => <div className="col col-12 pt1">
  <div className="col col-12 py1 heading">{
      data.fieldName.length != 0
        ? data.fieldName
        : '. . .'
    }</div>
  <div className="col col-12 mobile-card p2">AudioUpload</div>
</div>

export const InputVideoUpload = (data) => <div className="col col-12 pt1">
  <div className="col col-12 py1 heading">{
      data.fieldName.length != 0
        ? data.fieldName
        : '. . .'
    }</div>
  <div className="col col-12 mobile-card p2">VideoUpload</div>
</div>

export const InputNumberField = (data) => <div className="col col-12 pt1">
  <div className="col col-12 py1 heading">{
      data.fieldName.length != 0
        ? data.fieldName
        : '. . .'
    }</div>
  <div className="col col-12"><Input style={{
    width: '100%'
  }} type="number" placeholder='Enter...'/></div>
</div>

export const InputTextArea = (data) => <div className="col col-12 pt1">
  <div className="col col-12 py1 heading">{
      data.fieldName.length != 0
        ? data.fieldName
        : '. . .'
    }</div>
  <div className="col col-12"><TextArea style={{
    width: '100%'
  }} placeholder='Enter'/></div>
</div>

export const InputText = (data) => <div className="col col-12 pt1">
  <div className="col col-12 py1 heading">{
      data.fieldName.length != 0
        ? data.fieldName
        : '. . .'
    }</div>
  <div className="col col-12"><Input style={{
    width: '100%'
  }} placeholder='Enter...'/></div>
</div>

export const InputRadioButton = (data) => <div className="col col-12">
  <div className="col col-12 py1 heading">{
      data.fieldName.length != 0
        ? data.fieldName
        : '. . .'
    }</div>
  <div className="col col-12 mobile-card px1">
    {
      data.options.map(op => <Radio className="p1" style={{
          color: 'gray'
        }} label={op}/>)
    }
    {_.isEmpty(data.options) && <div className="col col-12 p2">No Options Found</div>}
  </div>
</div>
export const fieldMethod = (fieldType , fD) => {
 const fieldMethod = {
    TextField: (fieldData) => InputText(fieldData),
    CheckBox: (fieldData) => InputCheckBox(fieldData),
    DatePicker: (fieldData) => InputDatePicker(fieldData),
    DropDown: (fieldData) => InputDropDown(fieldData),
    ImageUpload: (fieldData) => InputImageUpload(fieldData),
    AudioUpload: (fieldData) => InputAudioUpload(fieldData),
    VideoUpload: (fieldData) => InputVideoUpload(fieldData),
    NumberField: (fieldData) => InputNumberField(fieldData),
    TextArea: (fieldData) => InputTextArea(fieldData),
    RadioButton: (fieldData) => InputRadioButton(fieldData)
  }
  return fieldMethod[fieldType] ? fieldMethod[fieldType](fD) : true;
}
