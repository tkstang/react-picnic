import merge from 'lodash/merge';
import { SELECT_FIRMNESS } from '../actions';

const FirmnessReducer = (state = '', action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case SELECT_FIRMNESS:
      newState = action.selection;
      return newState;
    default:
      return state;
  }
};

export default FirmnessReducer;
