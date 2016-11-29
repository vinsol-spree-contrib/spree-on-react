import products from './products';
import taxonomies from './taxonomies';
import loader from './loader';
import flash from './flash';

export default {
  addProducts: products.addProducts,
  addProduct: products.addProduct,
  addTaxonomies: taxonomies.addTaxonomies,
  displayLoader: loader.displayLoader,
  hideLoader: loader.hideLoader,
  addFlash: flash.addFlash,
  hideFlash: flash.hideFlash
};
