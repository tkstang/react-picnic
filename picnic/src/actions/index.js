import axios from 'axios';

const SELECT_SEARCH_TYPE = 'SELECT_SEARCH_TYPE';
const SELECT_ANIMAL = 'SELECT_ANIMAL';
const SELECT_FIRMNESS = 'SELECT_FIRMNESS';

const selectSearchType = (selection) => {
  return {
    type: 'SELECT_SEARCH_TYPE',
    selection,
  };
};

const selectAnimal = (selection) => {
  return {
    type: 'SELECT_ANIMAL',
    selection,
  };
};

const selectFirmness = (selection) => {
  return {
    type: 'SELECT_FIRMNESS',
    selection,
  };
};

function fetchCheese(query) {
  const API_URL = 'http://cheeswhiz.herokuapp.com/api/cheese';

  return axios
  .get(API_URL)
  .then(response => response.data);
}

const login = props =>
// console.log('login props', props);
({
  type: '@@redux-form/SET_SUBMIT_SUCCEEDED',
  payload: this.props, //payload will be result of API call
});

const getCheese = (query) => {
  return {
    type: 'GET_CHEESE',
    payload: fetchCheese(query),
  };
};

export {
  SELECT_SEARCH_TYPE,
  SELECT_ANIMAL,
  SELECT_FIRMNESS,
  selectSearchType,
  selectAnimal,
  selectFirmness,
  login,
  getCheese
};
