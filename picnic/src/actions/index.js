<<<<<<< HEAD
const SELECT_SEARCH_TYPE = 'SELECT_SEARCH_TYPE';

const selectSearchType = (selection) => {
  console.log(selection);
  return {
    type: 'SELECT_SEARCH_TYPE',
    selection,
  };
};

const selectCheeseFirmness = selection => ({
  type: 'SELECT_CHEESE_FIRMNESS',
  selection,
});

export { SELECT_SEARCH_TYPE, selectSearchType, selectCheeseFirmness };
=======
import axios from 'axios';

function fetchCheese(query) {
  const API_URL = 'http://cheeswhiz.herokuapp.com/api/cheese';

  return axios
    .get(API_URL)
    .then(response => response.data);
}

export const login = props =>
  // console.log('login props', props);
   ({
     type: '@@redux-form/SET_SUBMIT_SUCCEEDED',
     payload: this.props, //payload will be result of API call
   });

export const getCheese = (query) => {
  return {
    type: 'GET_CHEESE',
    payload: fetchCheese(query),
  }
};
>>>>>>> 5637a11a68960700a09e2c07e8287a4c7880d882
