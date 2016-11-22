var request = require('superagent');

const ProductsAPI = {
  getList: () => {
    var apiDomain = process.env.REACT_APP_API_DOMAIN
    return request
      .get(`http://${apiDomain}/api/v1/products`)
      .set('Accept', 'application/json')
      .then(
        (response) => {
          return response;
        },
        (error) => {
          return { products: [] };
        }
      );
  }
}

export default ProductsAPI;
