import APP_ACTIONS from '../constants/app-actions';

const initialState = {
  line_items: []
};

const order = function(state = initialState, action) {
  switch (action.type) {
    // When first item is added to cart
    case APP_ACTIONS.CREATE_ORDER:
      return action.payload;
    // When more items added to cart
    case APP_ACTIONS.ADD_PRODUCT_TO_CART:
      return {};
    // When an item is removed from cart or qty falls to zero
    case APP_ACTIONS.REMOVE_LINE_ITEM:
      return {};
    // When qty is updated
    case APP_ACTIONS.UPDATE_LINE_ITEM:
      return {};
    // When `emptyCart` is called
    case APP_ACTIONS.DESTROY_ORDER:
      return {};
    default:
      return state;
  }
}

export default order;
