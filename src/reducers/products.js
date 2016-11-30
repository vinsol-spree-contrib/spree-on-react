import APP_ACTIONS from '../constants/app-actions';

const initialState = [];

const products = function(state = initialState, action) {
  let newProductList;
  let productInList;

  switch (action.type) {
    case APP_ACTIONS.ADD_PRODUCTS:
      return state.concat(action.payload);
    case APP_ACTIONS.ADD_PRODUCT:
      productInList = state.find((product) => {
        return (product.id === action.payload.id);
      });


      if (productInList) {
        return state;
      }
      else {
        newProductList = Object.assign( [], state );
        newProductList.push(action.payload);
        return newProductList;
      }

    default:
      return state;
  }
}

export default products;
