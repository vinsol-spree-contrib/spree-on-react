var request = require('superagent');

const ProductsAPI = {
  getList: () => {
    let apiBase = process.env.REACT_APP_API_BASE;
    return request
      .get(`${apiBase}/products`)
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
  }
}

export default ProductsAPI;
