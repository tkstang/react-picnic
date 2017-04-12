import merge from 'lodash/merge';

const SessionReducer = (state = { id: null }, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case 'LOGIN_USER_FULFILLED':
      newState = action.payload;
      return newState;
    case 'LOGOUT_USER':
      newState = { id: null };
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
