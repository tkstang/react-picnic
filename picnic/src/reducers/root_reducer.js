import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SessionReducer from './session_reducer';
import SearchTypeReducer from './search_type_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  form: formReducer,
  searchType: SearchTypeReducer,
});

export default RootReducer;
