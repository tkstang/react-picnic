import merge from 'lodash/merge';
import { CHEESE_INPUT } from '../actions';

const CheeseNameReducer = (state = '', action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case CHEESE_INPUT:
      newState = action.input;
      return newState;
    default:
      return state;
  }
};

export default CheeseNameReducer;
