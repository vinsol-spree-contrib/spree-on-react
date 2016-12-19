import PRODUCT from '../constants/product';
import SpreeAPIProductAdapter from './ams-adapters/spree-api-product-adapter';

var request = require('superagent');

const ProductsAPI = {
  getList: (page_no=1) => {
    let apiBase = process.env.REACT_APP_AMS_API_BASE;
    return request
      .get(`${apiBase}/products?page=${page_no}&per_page=${PRODUCT.PER_PAGE}`)
      .set('Accept', 'application/json')
      .then(
        (response) => {
          if (JSON.parse(process.env.REACT_APP_PARSE_AMS_RESPONSE)) {
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
