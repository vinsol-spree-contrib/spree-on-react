import APP_ACTIONS from '../constants/app-actions';
import ProductFinder from '../services/product-finder';

const initialState = {
  products: []
};

const productList = function(state = initialState, action) {
  let newProductList;
  let productInList;
  let oldProductList;

  switch (action.type) {
    case APP_ACTIONS.ADD_PRODUCTS:
      return Object.assign({}, state, action.payload);

    case APP_ACTIONS.APPEND_PRODUCTS:
      newProductList = action.payload.products.map((product) => { return product.id });
      oldProductList = state.products.filter ((product) => {
        return newProductList.indexOf(product.id) === -1;
      });

      return ( Object.assign (
              {},
              action.payload,
              { products: [...oldProductList, ...action.payload.products] }
      ));

    case APP_ACTIONS.ADD_PRODUCT:
      productInList = ProductFinder.find(action.payload.id, state.products);

      if (productInList) {
        return state;
      }
      else {
        newProductList = Object.assign( [], state.products );
        newProductList.push(action.payload);
        return Object.assign ( {}, state, { products: newProductList } );
      }

    default:
      return state;
  }
}

export default productList;
