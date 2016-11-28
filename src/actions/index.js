import products from './products';
import taxonomies from './taxonomies';
import loader from './loader';
import productsSearch from './products-search';

export default {
  addProducts: products.addProducts,
  addProduct: products.addProduct,
  addTaxonomies: taxonomies.addTaxonomies,
  displayLoader: loader.displayLoader,
  hideLoader: loader.hideLoader,
  addSearchTerm: productsSearch.addSearchTerm
};
