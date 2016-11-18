import productList from './product-list';
import products from './products';
import taxonomies from './taxonomies';

export default {
  fetchProducts: productList.fetchProducts,
  addProducts: products.addProducts,
  fetchTaxonomies: taxonomies.fetchTaxonomies,
  addTaxonomies: taxonomies.addTaxonomies
};
