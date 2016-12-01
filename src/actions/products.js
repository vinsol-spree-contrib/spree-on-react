import APP_ACTIONS from '../constants/app-actions';

import TaxonFinder from '../services/taxon-finder';
import ProductsAPI from '../apis/products';

const products = {
  addProducts: (products) => {
    return {
      type: APP_ACTIONS.ADD_PRODUCTS,
      payload: products
    };
  },

  addProduct: (product) => {
    return {
      type: APP_ACTIONS.ADD_PRODUCT,
      payload: product
    }
  },

  fetchProductsByTaxon: () => {
    return (dispatch, getState) => {
      let currentPathName = getState().routing.locationBeforeTransitions.pathname;
      let taxon = TaxonFinder.findByPermalink(currentPathName, getState().taxons);

      return ProductsAPI.getCategorizedList(taxon.id);
    }
  }
};

export default products;
