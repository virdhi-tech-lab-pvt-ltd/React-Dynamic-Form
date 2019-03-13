import {handleServerError, showAppBusy} from 'reducers/app';

export function apiCall(apiAction, stateUpdater=null, dataHandler=null, callback=null)  {
  return (dispatch) => {
    dispatch(showAppBusy(true));
    return apiAction().then(res => {
      let payload = dataHandler ? dataHandler(res.data) :res.data;
      stateUpdater ? dispatch(stateUpdater(payload)) : null;
      callback ? callback(payload) : null;
      dispatch(showAppBusy(false));
    })
    .catch((error) => {
      dispatch(showAppBusy(false));
      dispatch(handleServerError(error.response.data.message || error.response.data));
    });
};
}
