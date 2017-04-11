import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SessionReducer from './session_reducer';
import LoginReducer from './login_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  form: formReducer,
  login: LoginReducer,
});

export default RootReducer;
