import axios from 'axios';

const SELECT_SEARCH_TYPE = 'SELECT_SEARCH_TYPE';
const SELECT_ANIMAL = 'SELECT_ANIMAL';
const SELECT_FIRMNESS = 'SELECT_FIRMNESS';
const CHEESE_INPUT = 'CHEESE_INPUT';
const LOGIN_USER = 'LOGIN_USER';

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

const cheeseInput = (input) => {
  return {
    type: 'CHEESE_INPUT',
    input,
  };
};

function fetchCheese(query, selection) {
  let API_URL = '';
  console.log("query", query);

  if (selection === 'animal' && query !== null) {
    API_URL = `http://cheeswhiz.herokuapp.com/api/cheese/animal/${query}`;
  }

  if (selection === 'firmness' && query !== null) {
    API_URL = `http://cheeswhiz.herokuapp.com/api/cheese/firmness/${query}`;
  }

  if (selection === 'name' && query !== null) {
    API_URL = `http://cheeswhiz.herokuapp.com/api/cheese/specific/${query}`;
  }

  return axios
  .get(API_URL)
  .then(response => response.data);
}

function loginUser(userInfo) {
  const API_URL = `http://cheeswhiz.herokuapp.com/api/user/login`;

  return axios
  .post(API_URL, userInfo)
  .then(response => {
    console.log(response.data);
    return response.data;
  })
}

const login = (userInfo) => {
  return {
    type: 'LOGIN_USER',
    payload: loginUser(userInfo),
  };
};

const getCheese = (query, selection) => {
  return {
    type: 'GET_CHEESE',
    payload: fetchCheese(query, selection),
  };
};

export {
  SELECT_SEARCH_TYPE,
  SELECT_ANIMAL,
  SELECT_FIRMNESS,
  CHEESE_INPUT,
  LOGIN_USER,
  selectSearchType,
  selectAnimal,
  selectFirmness,
  cheeseInput,
  login,
  getCheese,
};
