import merge from 'lodash/merge';
import { SELECT_SEARCH_TYPE } from '../actions';

const SearchTypeReducer = (state = '', action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case SELECT_SEARCH_TYPE:
      newState.selection = action.selection;
      console.log(newState);
      return newState;
    default:
      console.log(state);
      return state;
  }
};

export default SearchTypeReducer;
