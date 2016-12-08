import APP_ACTIONS from '../constants/app-actions';
import OrdersAPI from '../apis/order';
import localStorageAPI from '../services/local-storage-api';

const order = {
  /* This is called whenever:
    1. Order is updated.
    2. Moved to a different state in checkout flow. */
  updateOrder: (recievedOrder) => {
    return { type: APP_ACTIONS.CREATE_ORDER, payload: recievedOrder };
  },

  addProductToCart: (variantId, quantity = 1) => {
    return (dispatch, getState) => {
      let order = getState().order;
      if (order.id === undefined) {
        return OrdersAPI.create({variantId, quantity}).then((response) => {
          dispatch ({
                    type: APP_ACTIONS.CREATE_ORDER,
                    payload: response.body
                  });
          localStorageAPI.save(getState());
          return response;
        });
      }
      else {
        let orderNumber = order.number;
        let orderToken = order.token;

        return OrdersAPI.addLineItem({ variantId, quantity, orderNumber, orderToken }).then((response) => {
          dispatch ({
                    type: APP_ACTIONS.ADD_PRODUCT_TO_CART,
                    payload: response.body
                  });
          localStorageAPI.save(getState());
          return response;
        });
      }

    }
  },

  emptyCart: (order) => {
    return (dispatch, getState) => {
      let orderNumber = order.number;
      let orderToken = order.token;

      return OrdersAPI.destroy({ orderNumber, orderToken }).then((response) => {
        dispatch ({ type: APP_ACTIONS.DESTROY_ORDER });

        localStorageAPI.clear();
        return response;
      });
    }
  },

  removeProductFromCart: (lineItemId) => {
    return (dispatch, getState) => {
      let orderFromState = getState().order;
      let orderNumber = orderFromState.number;
      let orderToken = orderFromState.token;

      return OrdersAPI.removeLineItem({orderNumber, orderToken, lineItemId}).then((response) => {
        dispatch ({ type: APP_ACTIONS.REMOVE_LINE_ITEM, payload: lineItemId });

        localStorageAPI.save(getState());
        return response;
      });
    }
  },

  changeProductQuantityFromCart: (quantity, lineItemId) => {
    return (dispatch, getState) => {
      let orderFromState = getState().order;
      let orderNumber = orderFromState.number;
      let orderToken = orderFromState.token;

      return OrdersAPI.update({ quantity, orderNumber, orderToken, lineItemId }).then((response) => {
        dispatch ({ type: APP_ACTIONS.UPDATE_LINE_ITEM, payload: response.body });

        localStorageAPI.save(getState());
        return response
      });
    }
  }

};

export default order;
