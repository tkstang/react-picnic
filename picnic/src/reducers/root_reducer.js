import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SessionReducer from './session_reducer';
import SearchTypeReducer from './search_type_reducer';
import LoginReducer from './login_reducer';
import List from './cheese_list_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  form: formReducer,
  searchType: SearchTypeReducer,
  login: LoginReducer,
  list: List,
});

export default RootReducer;
