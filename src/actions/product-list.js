import ProductsAPI from '../apis/products';

const productList = {
  fetchProducts: (searchTerm = '') => {
    return ProductsAPI.getList(searchTerm = '');
  },

};

export default productList;
