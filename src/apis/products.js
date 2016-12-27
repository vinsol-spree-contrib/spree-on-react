import APP_DEFAULTS from '../constants/app-defaults';
import SpreeAPIProductAdapter from './ams-adapters/spree-api-product-adapter';

var request = require('superagent');

const ProductsAPI = {

  getList: (params = {}) => {
    let apiBase = process.env.REACT_APP_AMS_API_BASE;
    let pageNo = params.page_no || 1,
        searchTerm = params.searchTerm || '';
    return request
      .get(`${ apiBase }/products`)
      .query({ page: pageNo, per_page: APP_DEFAULTS.perPage, 'q[name_cont]': searchTerm })
      .set('Accept', 'application/json')
      .then(
        (response) => {
          if (JSON.parse(process.env.REACT_APP_PARSE_AMS_RESPONSE)) {
            debugger
            let processedResponse = SpreeAPIProductAdapter.processList(response.body);
            response.body = processedResponse;
          }

          return response;
        }
      );
  },

  getItem: (productId) => {
    return request
      .get(`${process.env.REACT_APP_AMS_API_BASE}/products/` + productId)
      .set('Accept', 'application/json')
      .then(
        (response) => {
          if (JSON.parse(process.env.REACT_APP_PARSE_AMS_RESPONSE)) {
            let processedResponse = SpreeAPIProductAdapter.processItem(response.body);
            response.body = processedResponse;
          }

          return response;
        }
      );
  },

  getCategorizedList: (taxonId) => {
    let apiBase = process.env.REACT_APP_AMS_API_BASE;
    return request
      .get(`${apiBase}/taxons/products?id=` + taxonId)
      .set('Accept', 'application/json')
      .then(
        (response) => {
          return response;
        },
        (error) => {
          return { product: {} };
        }
      );
  }
}

export default ProductsAPI;
