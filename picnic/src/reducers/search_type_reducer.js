import merge from 'lodash/merge';
import { SELECT_SEARCH_TYPE } from '../actions';

const SearchTypeReducer = (state = '', action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case SELECT_SEARCH_TYPE:
      newState = action.selection;
      return newState;
    default:
      return state;
  }
};

export default SearchTypeReducer;
