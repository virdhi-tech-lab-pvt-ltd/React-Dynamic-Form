import appReducer, {handleHover,HOVER} from '../../reducers/app';
jest.mock('app/client/api')
import * as api from 'app/client/api';
import { Reducer, Thunk } from 'redux-testkit';

describe('counter reducer', () => {

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should create an action to add a handleHover', () => {
    const payload = 1
    const expectedAction = {
      type: HOVER,
      payload
    }
    expect(handleHover(payload)).toEqual(expectedAction)
  });

  it('should update handleHover action on with existing state',()=>{
  	const c_state = {
  		hover: -1
  	};
  	const u_state = {
  		hover: 1
  	};
  	Reducer(appReducer).withState(c_state).expect(handleHover(1));
  });
  
});
