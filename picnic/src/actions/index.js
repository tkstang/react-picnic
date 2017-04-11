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
