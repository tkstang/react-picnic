import merge from 'lodash/merge';
import { SELECT_ANIMAL } from '../actions';

const AnimalReducer = (state = '', action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case SELECT_ANIMAL:
      newState = action.selection;
      return newState;
    default:
      return state;
  }
};

export default AnimalReducer;
