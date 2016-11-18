import APP_ACTIONS from '../constants/app-actions';

import TaxonomyAPI from '../apis/taxonomies';

const Taxonomies = {
  fetchTaxonomies: () => {
    return TaxonomyAPI.getList();
  },

  addTaxonomies: (taxonomies) => {
    return {
      type: APP_ACTIONS.ADD_TAXONOMIES,
      payload: taxonomies
    }
  }
};

export default Taxonomies;
