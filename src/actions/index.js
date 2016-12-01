import products from './products';
import taxons from './taxons';
import loader from './loader';
import order from './order';
import flash from './flash';

export default {
  addProducts: products.addProducts,
  addProduct: products.addProduct,
  fetchProductsByTaxon: products.fetchProductsByTaxon,
  addTaxons: taxons.addTaxons,
  displayLoader: loader.displayLoader,
  hideLoader: loader.hideLoader,
  addProductToCart: order.addProductToCart,
  setFlash: flash.setFlash,
  showFlash: flash.showFlash,
  hideFlash: flash.hideFlash
};
