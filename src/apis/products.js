import PRODUCT from '../constants/product';

var request = require('superagent');

const ProductsAPI = {
  getList: (page_no=1) => {
    let apiBase = process.env.REACT_APP_API_BASE;
    return request
      .get(`${apiBase}/products?page=${page_no}&per_page=${PRODUCT.PER_PAGE}`)
      .set('Accept', 'application/json')
      .then(
        (response) => {
          return response;
        },
        (error) => {
          return { products: [] };
        }
      );
  },

  getItem: (productId) => {
    return request
      .get(`${process.env.REACT_APP_API_BASE}/products/` + productId)
      .set('Accept', 'application/json')
      .then(
        (response) => {
          return response;
        },
        (error) => {
          return { product: {} };
        }
      );
  },

  getCategorizedList: (taxonId) => {
    let apiBase = process.env.REACT_APP_API_BASE;
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
