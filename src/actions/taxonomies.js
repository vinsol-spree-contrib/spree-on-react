import APP_ACTIONS from '../constants/app-actions';

const Taxonomies = {
  addTaxonomies: (taxonomies) => {
    return {
      type: APP_ACTIONS.ADD_TAXONOMIES,
      payload: taxonomies
    }
  }
};

export default Taxonomies;
