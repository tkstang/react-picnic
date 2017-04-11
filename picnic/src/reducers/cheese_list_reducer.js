const list = (state = [], action) => {
  switch (action.type) {
    case 'GET_CHEESE_FULFILLED':
      return action.payload;
    default:
      return state;
  }
};

export default list;
