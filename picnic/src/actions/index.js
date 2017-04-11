import axios from 'axios';

const SELECT_SEARCH_TYPE = 'SELECT_SEARCH_TYPE';

const selectSearchType = selection =>
  // console.log(selection);
   ({
     type: 'SELECT_SEARCH_TYPE',
     selection,
   });

const selectCheeseFirmness = selection => ({
  type: 'SELECT_CHEESE_FIRMNESS',
  selection,
});

function fetchCheese(query) {
  let API_URL = '';

  if (query === 'animal') {
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

const getCheese = query => ({
  type: 'GET_CHEESE',
  payload: fetchCheese(query),
});

export { SELECT_SEARCH_TYPE, selectSearchType, selectCheeseFirmness, getCheese };
