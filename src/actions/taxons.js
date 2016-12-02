import APP_ACTIONS from '../constants/app-actions';

const Taxons = {
  addTaxons: (taxons) => {
    return {
      type: APP_ACTIONS.ADD_TAXONS,
      payload: taxons
    }
  }
};

export default Taxons;
