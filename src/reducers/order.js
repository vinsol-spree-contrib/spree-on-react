import APP_ACTIONS from '../constants/app-actions';

const initialState = {
  line_items: []
};

const order = function(state = initialState, action) {
  let newLineItems = Object.assign([], state.line_items);
  let lineItemIndexToBeRemoved;

  switch (action.type) {
    case APP_ACTIONS.CREATE_ORDER:
      return action.payload;

    case APP_ACTIONS.ADD_PRODUCT_TO_CART:
      lineItemIndexToBeRemoved = state.line_items.findIndex((lineItem, idx) => {
        return (lineItem.variant_id === action.payload.variant_id);
      });

      if (lineItemIndexToBeRemoved > -1)
        newLineItems.splice(lineItemIndexToBeRemoved, 1);

      newLineItems.push(action.payload);

      return Object.assign({}, state, { line_items: newLineItems });
    // When an item is removed from cart or qty falls to zero
    case APP_ACTIONS.REMOVE_LINE_ITEM:
              return Object.assign (
              {},
              state,
              { line_items: state.line_items.filter((item)=>item.id!== action.payload) }
      );
    // When qty is updated
    case APP_ACTIONS.UPDATE_LINE_ITEM:
    let index = state.line_items.map((item)=> item.id).indexOf(action.payload.id)
    var updatedLineItems = Object.assign ([], state.line_items)
    updatedLineItems.splice(index, 1, action.payload);
      return Object.assign ({}, state, { line_items: updatedLineItems });

    // When `emptyCart` is called
    case APP_ACTIONS.DESTROY_ORDER:
      return initialState;
    default:
      return state;
  }
}

export default order;
