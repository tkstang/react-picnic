import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT, CLEAR_ERRORS } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: [],
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {

    // case LOGIN:
    //   newState.currentUser = action.currentUser;
    //   newState.errors = [];
    //   return newState;

    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;

    case RECEIVE_ERRORS:
      newState.currentUser = null;
      newState.errors = action.errors;
      return newState;

    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;

    case LOGOUT:
      return nullUser;

    default:
      return state;
  }
};

export default SessionReducer;
