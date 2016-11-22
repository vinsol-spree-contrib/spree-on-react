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
  }
}

export default ProductsAPI;
