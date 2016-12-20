import products from './products';
import taxons from './taxons';
import loader from './loader';
import order from './order';
import orderList from './order-list';
import flash from './flash';
import countries from './countries';
import checkout from './checkout';
import placedOrder from './placed-order';
import user from './user';

export default {
  addProducts: products.addProducts,
  appendProducts: products.appendProducts,
  addProduct: products.addProduct,
  addOrders: orderList.addOrders,
  addOrder: orderList.addOrder,
  fetchProductsByTaxon: products.fetchProductsByTaxon,
  addTaxons: taxons.addTaxons,
  displayLoader: loader.displayLoader,
  hideLoader: loader.hideLoader,
  addProductToCart: order.addProductToCart,
  emptyCart: order.emptyCart,
  clearOrder: order.clearOrder,
  setFlash: flash.setFlash,
  showFlash: flash.showFlash,
  hideFlash: flash.hideFlash,
  removeProductFromCart: order.removeProductFromCart,
  changeProductQuantityFromCart: order.changeProductQuantityFromCart,
  updateOrderInState: order.updateOrderInState,
  refreshOrder: order.refreshOrder,
  addLineItem: order.addLineItem,
  addCountries: countries.addCountries,
  goToNextStep: checkout.goToNextStep,
  addPlacedOrder: placedOrder.addPlacedOrder,
  login: user.login,
  logout: user.logout
};
