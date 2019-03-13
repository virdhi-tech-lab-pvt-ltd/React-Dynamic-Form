import update from 'immutability-helper';
import reduceReducers from 'reduce-reducers';
import {fieldTypes} from 'app/common/appConstants';
import {createForm , fetchForms , updateForm , deleteForm} from 'app/client/api';
import * as App from './app';


//  Action Name's

const initialState = {
  id:'',
  dialog: false,
  form:{
    formName: '',
    description: ''
  },
  formFields: [],
  formLists :[],
  tempForm: {
    fieldName: '',
    fieldType: '',
    mandatory: false,
    important: 5
  },
  editForm: null,
  formCreation: false,
  optionName: '',
  fieldOrder: null,
  inputCount: null
};

// Action Methods
const ID = 'form/ID';
const OPEN_DIALOG = 'form/OPEN_DIALOG';
const FORM_LISTS = 'form/FORM_LISTS';
const FORM_DETAILS = 'form/FORM_DETAILS';
const TEMP_FORM = 'form/TEMP_FORM';
const EDIT_FORM = 'form/EDIT_FORM';
const FORM_CREATION = 'form/FORM_CREATION';
const FORM = 'form/FORM';
const FIELD_ORDER = 'form/FIELD_ORDER';
const OPTION_NAME = 'form/OPTION_NAME';
const INPUT_COUNT = 'form/INPUT_COUNT';
export const RESET_FORM_INPUT='form/RESET_FORM_INPUT';


export const handleFormId = (payload) =>({ type:ID , payload});
export const openDialog = (payload) => ({type: OPEN_DIALOG,payload});
export const handleFormsList = (payload) => ({type: FORM_LISTS,payload});
export const updateFormDetails = (payload) => ({  type: FORM_DETAILS,  payload});
export const updateTempForm = (payload) => ({  type: TEMP_FORM,  payload});
export const editExistingForm = (payload) => ({  type: EDIT_FORM,  payload});
export const formCreation = (payload) => ({  type: FORM_CREATION,  payload});
export const handleForm = (payload) => ({  type: FORM,  payload});
export const changeFieldOrder = (payload) => ({  type: FIELD_ORDER,  payload});
export const changeOptionName = (payload) => ({  type: OPTION_NAME,  payload});
export const changeInputCount = (payload) => ({  type: INPUT_COUNT,  payload});
export const handleResetFormInput = () => ({ type: RESET_FORM_INPUT });


export function formsList(){
  return async(dispatch , getState) => {
    try{
      dispatch(App.showAppBusy(true));
      let { data } = await fetchForms();
      dispatch(handleFormsList(data));
      dispatch(App.showAppBusy(false));
    }catch(err){
      if(err.response){
      }
    }
  }
}
export function saveForm(){
  return async(dispatch , getState) => {
    try{
      let { form:{formFields ,form , id} } = getState() , newForm={};
      newForm.formFields = formFields;
      newForm.formName = form.formName;
      newForm.description = form.description;
      dispatch(App.showAppBusy(true));
      id ? await updateForm(id , newForm)  :await createForm(newForm);
      dispatch(formsList());
      dispatch(formCreation(false));
      dispatch(handleResetFormInput());
      dispatch(App.showAppBusy(false));
    }catch(err){
      if (err.response) {
        let { data } = err.response;
        dispatch(App.showAppBusy(false));
       dispatch(App.handleAppError(data));
     }
    }
  }
}
export function formDeletion(id){
  return async(dispatch , getState) => {
    try{
      dispatch(App.showAppBusy(true));
      await deleteForm(id);
      dispatch(formsList());
      dispatch(handleResetFormInput());
      dispatch(App.resetWarning());
      dispatch(App.showAppBusy(false));
    }catch(err){
      if(err.response){
       console.log(err.response);
      }
    }
  }
}

const reducer = (state = initialState, action) => {
  let { type , payload } = action;
  let {form , id} = initialState;
  switch (type) {
    case ID:
      return update(state, {
        id: {
          $set: payload
        }
      });
    case OPEN_DIALOG:
      return update(state, {
        dialog: {
          $set: payload
        }
      });
    case FORM_LISTS:
      return update(state, {
        formLists: {
          $set: payload
        }
      });
    case FORM_DETAILS:
      return update(state, {
        formFields: {
          $set: payload
        }
      });
    case TEMP_FORM:
      return update(state, {
        tempForm: {
          $set: payload
        }
      });
    case EDIT_FORM:
      return update(state, {
        editForm: {
          $set: payload
        }
      });
    case FORM_CREATION:
      return update(state, {
        formCreation: {
          $set: payload
        }
      });
    case FORM:
      return update(state, {
        form: {
          $set: payload
        }
      });
    case FIELD_ORDER:
      return update(state, {
        fieldOrder: {
          $set: payload
        }
      });

    case OPTION_NAME:
      return update(state, {
        optionName: {
          $set: payload
        }
      });
    case INPUT_COUNT:
      return update(state, {
        inputCount: {
          $set: payload
        }
      });
    case RESET_FORM_INPUT:
      return update(state, {id:{ $set : id}},{ form: { $set: form } });
    default:
      return state;
  }
}

export default reduceReducers(
  reducer
)
