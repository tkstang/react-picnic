import axios from 'axios';

export const login = (props) => {
  console.log('login props', props);
  return {
    type: '@@redux-form/SET_SUBMIT_SUCCEEDED',
    payload: this.props, //payload will be result of API call
  };
};
