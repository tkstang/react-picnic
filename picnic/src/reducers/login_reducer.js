import { login } from '../actions/index';

const LoginReducer = (state = { loggedIn: false }, action) => {
  console.log('action', action);
  switch (action.type) {
    case 'LOGIN':
      console.log('inside reducer login');
      return action.payload;
    case '@@redux-form/SET_SUBMIT_SUCCEEDED':
      console.log('fulfilled');
      return action.payload;
    case 'LOGIN_REJECTED':
      // console.log('rejected');
      return action.payload;
    default:
      return state;
  }
};

export default LoginReducer;
