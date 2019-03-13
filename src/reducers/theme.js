import update from 'immutability-helper';
import reduceReducers from 'reduce-reducers';
import { theme } from 'app/_userTheme';

const initialState = theme['_default'];

//  Action Name's

const THEME = 'theme/THEME';

// Action Methods

export const updateThemeDetails = (payload) => ({ type: THEME, payload });

export const changeTheme = (themeName) => async(dispatch) => {
  dispatch(updateThemeDetails(theme[themeName]));
}

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case THEME:
      return update(state, { $set: payload });
    default:
      return state;
  }
}

export default reduceReducers(
  reducer
)
