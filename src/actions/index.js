import products from './products';
import taxons from './taxons';
import loader from './loader';
import order from './order';
import flash from './flash';

export default {
  addProducts: products.addProducts,
  appendProducts: products.appendProducts,
  addProduct: products.addProduct,
  fetchProductsByTaxon: products.fetchProductsByTaxon,
  addTaxons: taxons.addTaxons,
  displayLoader: loader.displayLoader,
  hideLoader: loader.hideLoader,
  addProductToCart: order.addProductToCart,
  emptyCart: order.emptyCart,
  setFlash: flash.setFlash,
  showFlash: flash.showFlash,
  hideFlash: flash.hideFlash,
  removeProductFromCart: order.removeProductFromCart,
  changeProductQuantityFromCart: order.changeProductQuantityFromCart
};
