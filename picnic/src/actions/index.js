import axios from 'axios';
import { connect } from 'react-redux';

const SELECT_SEARCH_TYPE = 'SELECT_SEARCH_TYPE';
const SELECT_ANIMAL = 'SELECT_ANIMAL';

const mapStateToProps = (state, ownProps) => {
  // console.log("hello from mapStateToProps", state);
  return { selection: state.searchType }
}

const selectSearchType = selection =>
  // console.log(selection);
   ({
     type: 'SELECT_SEARCH_TYPE',
     selection,
   });

const selectAnimal = (selection) => {
  console.log(selection);
  return {
    type: 'SELECT_ANIMAL',
    selection,
  };
};

const selectCheeseFirmness = selection => ({
  type: 'SELECT_CHEESE_FIRMNESS',
  selection,
});

function fetchCheese(query, selection) {
  let API_URL = '';

  if (selection === 'animal' && query !== null) {
    API_URL = `http://cheeswhiz.herokuapp.com/api/cheese/animal/${query}`;
  }

  if (query === 'firmness') {
    API_URL = `http://cheeswhiz.herokuapp.com/api/cheese/firmness/${query}`;
  }

  if (query === 'name') {
    API_URL = `http://cheeswhiz.herokuapp.com/api/cheese/animal/${query}`;
  }

  return axios
  .get(API_URL)
  .then(response => response.data);
}
//
// const login = props =>
// // console.log('login props', props);
// ({
//   type: '@@redux-form/SET_SUBMIT_SUCCEEDED',
//   payload: this.props, //payload will be result of API call
// });

const getCheese = (query, selection) => {
  return {
    type: 'GET_CHEESE',
    payload: fetchCheese(query, selection),
  };
};

export { SELECT_SEARCH_TYPE, SELECT_ANIMAL, selectSearchType, selectAnimal, selectCheeseFirmness, getCheese };
