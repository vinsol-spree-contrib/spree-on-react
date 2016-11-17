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
          return [];
        }
      );
  }
}

export default ProductsAPI;
