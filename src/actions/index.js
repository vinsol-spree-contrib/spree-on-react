import productList from './product-list';
import products from './products';
import taxonomies from './taxonomies';
import productsSearch from './products-search';

export default {
  fetchProducts: productList.fetchProducts,
  addProducts: products.addProducts,
  fetchProduct: products.fetchProduct,
  addProduct: products.addProduct,
  fetchTaxonomies: taxonomies.fetchTaxonomies,
  addTaxonomies: taxonomies.addTaxonomies,
  addSearchTerm: productsSearch.addSearchTerm
};
