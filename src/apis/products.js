var request = require('superagent');

const ProductsAPI = {
  getList: () => {
    return request
      .get('http://localhost:3001/api/v1/products')
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
      .get('http://localhost:3001/api/v1/products/' + productId)
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
