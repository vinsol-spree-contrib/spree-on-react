import APP_ACTIONS from '../constants/app-actions';

const productsSearch = {
  addSearchTerm: (searchTerm) => {
    return {
      type: APP_ACTIONS.ADD_SEARCH_TERM,
      searchTerm: searchTerm
    };
  }
};

export default productsSearch;
