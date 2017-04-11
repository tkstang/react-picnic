const searchTypeSelection = (state = 'Search Type', action) => {
  switch (action.type) {
    case 'SELECT_SEARCH_TYPE':
      return action.selection;
    default:
      return state;
  }
};

export default searchTypeSelection;
