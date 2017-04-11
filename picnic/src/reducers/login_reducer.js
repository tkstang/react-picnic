import { login } from '../actions/index';

const LoginReducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    case '@@redux-form/SET_SUBMIT_SUCCEEDED':
      return action.payload;
    case 'LOGIN_REJECTED':
      // console.log('rejected');
      return action.payload;
    default:
      return state;
  }
};

export default LoginReducer;
