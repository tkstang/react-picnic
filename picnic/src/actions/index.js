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
