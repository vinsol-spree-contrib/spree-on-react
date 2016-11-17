import APP_ACTIONS from '../constants/app-actions';

const products = {
  addProducts: (products) => {
    return {
      type: APP_ACTIONS.ADD_PRODUCTS,
      payload: products
    };
  }
};

export default products;
