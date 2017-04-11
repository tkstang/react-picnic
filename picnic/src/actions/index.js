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

export { selectSearchType, selectCheeseFirmness };
