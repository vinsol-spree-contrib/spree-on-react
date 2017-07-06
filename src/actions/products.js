import APP_ACTIONS from '../constants/app-actions';

import TaxonFinder from '../services/taxon-finder';
import ProductsAPI from '../apis/products';

const products = {
  addProducts: (productsResponse) => {
    return {
      type: APP_ACTIONS.ADD_PRODUCTS,
      payload: productsResponse
    };
  },

  appendProducts: (productsResponse) => {
    return {
      type: APP_ACTIONS.APPEND_PRODUCTS,
      payload: productsResponse
    };
  },

  addProduct: (product) => {
    return {
      type: APP_ACTIONS.ADD_PRODUCT,
      payload: product
    }
  },

  fetchProducts: (paramsToMerge = {}) => {
    return (dispatch, getState) => {
      let currentPathName = getState().routing.location.pathname;
      let taxon = TaxonFinder.findByPermalink(currentPathName, getState().taxons);

      if (taxon) {
        paramsToMerge.taxonId = taxon.id;
        paramsToMerge.searchTerm = '';
      }

      return ProductsAPI.getList(paramsToMerge);
    }
  }
};

export default products;
