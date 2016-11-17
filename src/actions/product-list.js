import ProductsAPI from '../apis/products';

const productList = {
  fetchProducts: () => {
    return ProductsAPI.getList();
  }
};

export default productList;
