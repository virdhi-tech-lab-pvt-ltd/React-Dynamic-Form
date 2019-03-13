import update from 'immutability-helper';
import reduceReducers from 'reduce-reducers';

// import * as cookie from 'app/utils/cookie';

const initialState = {
  theme : '_default',
  initialized: false,
  search: '',
  isBusy: false,
  collapsible:false,
  error: null,
  hover: -1,
  orderListOption: false,
  textFieldError: {
    field: '',
    message: ''
  },
  action:false,
  navMenu: '',
  index: '',
  list: '',
  cookieInfo: {
    token: '',
    path: null
  },
  remarkInfo: {
    remarkModal: false,
    remarks: '',
    projectId: null,
    statusId: null
  },
  tost: {
    open: false,
    message: ''
  },
  modal: {
    header:'',
    open : false,
    errorMessage : ''
  },
  warningModal:{
    id:'',
    header:'Warning',
    open : false,
    errorMessage : ''
  },
  initialSelectedIndex : 0,
  role:'',
  errorFields:[]
}

export const ERROR_FIELDS = 'app/ERROR_FIELDS';
export const SHOW_BUSY = 'app/SHOW_BUSY';
export const INITIALIZE = 'app/INITIALIZE';
export const SEARCH = 'quotes/SEARCH';
export const SHOW_APP_ERROR = 'app/SHOW_APP_ERROR';
export const WARNING = 'app/WARNING';
export const RESET_WARNING = 'app/RESET_WARNING';
export const TEXT_FIELD_ERROR='app/TEXT_FIELD_ERROR';
export const INDEX = 'app/INDEX';
export const COLLAPSIBLE = 'app/COLLAPSIBLE';
export const NAV_MENU='app/NAV_MENU';
export const HOVER='app/HOVER';
export const ACTION_BUTTON = 'app/ACTION_BUTTON';
export const TOST='app/TOST';
export const REMARKS_INFO='app/REMARKS_INFO';
export const CLOSE_MODAL = 'app/CLOSE_MODAL';
export const ORDER_LIST_OPTION='app/ORDER_LIST_OPTION';
export const ROLE='app/ROLE';
export const THEME='app/THEME';
export const RESET_INPUT='app/RESET_INPUT';
export const REFERESH='app/REFERESH';
export const INITIAL_SELECTED_INDEX = 'app/INITIAL_SELECTED_INDEX';


export function loadApp() {
  return dispatch => {
    dispatch(initializeApp(true));
  }
}

export function initializeApp(initialized) {
  return { type: INITIALIZE , payload: initialized}
}
export function handleQuoteSearch(payload) {
  return { type: SEARCH, payload: payload };
}
export function handleError(error) {
  return { type: ERROR_FIELDS, payload: error }
}

export function showAppBusy(show) {
  return { type: SHOW_BUSY, payload: show }
}

export function showAppError(errorInfo) {
  return { type: SHOW_APP_ERROR, payload: errorInfo }
}

export function warning(warningInfo) {
  return { type: WARNING, payload: warningInfo }
}

export function resetWarning() {
  return { type: RESET_WARNING }
}

export function modalClose(payload){
  return { type: CLOSE_MODAL , payload: payload}
}

export function inputError(state){
  return { type: TEXT_FIELD_ERROR, payload:state };
}
export function handleIndex(errorInfo){
  return {type : INDEX , payload : errorInfo}
}

export function handleNavMenu(state){
  return { type: NAV_MENU, payload:state };
}

export function handleCollapsible(state){
  return { type: COLLAPSIBLE, payload:state };
}

export function handleActionButtons(payload){
  return{ type : ACTION_BUTTON , payload : payload}
}
export function handleResetInput() {
  return { type: RESET_INPUT }
}
export function handleHover(payload) {
  return { type: HOVER, payload: payload }
}

export function handleTost(payload) {
  return { type: TOST, payload: payload }
}

export function handleOrderListOption(payload) {
  return { type: ORDER_LIST_OPTION, payload: payload }
}
export function initialSelectedIndex(payload){
  return { type : INITIAL_SELECTED_INDEX , payload : payload}
}

export function handleUserRole(payload){
  return { type : ROLE , payload : payload}
}
export function handleTheme(payload){
  return { type : THEME , payload : payload}
}

export function handleRefresh() {
  return { type: REFERESH }
}

export function handleAppError(data) {
  return dispatch => {
     if(data || data.message)  dispatch(showAppError({errorMessage: data.message, open: true}));
    else if(data && Number(data.status) === 500)  dispatch(showAppError({errorMessage: 'Something went wrong', open: true}));
    else if(data.message && Number(data.status) === 409)  dispatch(showAppError({errorMessage : data.message , open: true}));
    else if(data.error.message)  dispatch(showAppError({errorMessage: data.error.message, open: true}));
    else  dispatch(showAppError({errorMessage: 'Internal Error', open: true}));
  }
}
export function handleModal(message) {
  return dispatch => {
      dispatch(modalClose(message))
  }
}

export function handleTab(message){
  return dispatch => {
    dispatch(initialSelectedIndex(message))
  }
}

export function handleRemarksChange(payload){
  return { type : REMARKS_INFO , payload : payload}
}


function reducer(state = initialState, action) {
	let { type, payload } = action;
  let {warningModal, errorFields, index ,search} = initialState;

	switch(type)	{

    case SHOW_BUSY:
      return update(state, { isBusy: { $set: payload } });

    case INITIALIZE:
      return update(state, { initialized: { $set: payload } });

    case SEARCH:
      return update(state, { search: { $set: payload } });

    case SHOW_APP_ERROR:
      return update(state, { modal: { $set: payload } });

    case WARNING:
      return update(state, { warningModal: { $set: payload } });

    case ERROR_FIELDS:
      return update(state , { errorFields: {$set : payload}});

    case RESET_WARNING:
      return update(state, { warningModal: { $set: warningModal } });

    case TEXT_FIELD_ERROR:
      return update(state, { textFieldError: { $set: payload } });

    case NAV_MENU:
     return update(state, { navMenu: { $set: payload } });

    case ACTION_BUTTON:
     return update(state , { action : {$set : payload}});

    case INDEX:
      return update(state , { index :{ $set : payload}});

    case COLLAPSIBLE:
      return update(state , { collapsible :{ $set : payload}});

    case RESET_INPUT:
     return update(state, { errorFields: { $set: errorFields }, index: { $set: index } , search: {$set : search}});

     case HOVER:
      return update(state, { hover: { $set: payload } });

    case TOST:
      return update(state, { tost: { $set: payload } });

    case CLOSE_MODAL:
      return update(state, { modal: { $set: payload } });

    case ORDER_LIST_OPTION:
     return update(state, { orderListOption: { $set: payload } });

    case REMARKS_INFO:
     return update(state, { remarkInfo: { $set: payload } });

   case INITIAL_SELECTED_INDEX:
    return update(state, { initialSelectedIndex: { $set: payload } });

    case ROLE:
     return update(state, { role: { $set: payload } });

   case THEME:
    return update(state, { theme: { $set: payload } });

    case REFERESH:
    return update(state, { $set: initialState });

    default:
      return state;
	}
}

export default reduceReducers(
  reducer,
  // validator,
)
