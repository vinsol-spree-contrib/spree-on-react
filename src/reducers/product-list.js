import APP_ACTIONS from '../constants/app-actions';

const initialState = {
  products: []
};

const productList = function(state = initialState, action) {
  let newProductList;
  let productInList;

  switch (action.type) {
    case APP_ACTIONS.ADD_PRODUCTS:
      return Object.assign( {}, action.payload,
                             {products: [...state.products, ...action.payload.products]} )

    case APP_ACTIONS.ADD_PRODUCT:
      productInList = state.products.find((product) => {
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

export default productList;
