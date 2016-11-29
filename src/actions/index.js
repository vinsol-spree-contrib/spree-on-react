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
  setFlash: flash.setFlash,
  hideFlash: flash.hideFlash
};
