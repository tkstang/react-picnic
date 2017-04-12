import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SessionReducer from './session_reducer';
import SearchTypeReducer from './search_type_reducer';
import AnimalReducer from './animal_reducer';
import FirmnessReducer from './firmness_reducer';
import List from './cheese_list_reducer';
import CheeseNameReducer from './cheese_input_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  form: formReducer,
  searchType: SearchTypeReducer,
  animal: AnimalReducer,
  firmness: FirmnessReducer,
  name: CheeseNameReducer,
  list: List,
});

export default RootReducer;
