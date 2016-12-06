import APP_ACTIONS from '../constants/app-actions';
import OrdersAPI from '../apis/order';
import localStorageAPI from '../services/local-storage-api';

const order = {
  addProductToCart: (variantId, quantity = 1) => {
    return (dispatch, getState) => {
      if (getState().order.id === undefined) {
        // Set API Request.
        // .then
        // if success dispatch --> CREATE_ORDER and set success flash.
        // else --> Set error flash
        OrdersAPI.create({variantId, quantity}).then((response) => {
          dispatch ({
                    type: APP_ACTIONS.CREATE_ORDER,
                    payload: response.body
                  });
          localStorageAPI.save(getState());
        });
      }
      else {
        let orderNumber = getState().order.number;
        let orderToken = getState().order.token;

        OrdersAPI.addLineItem({variantId, quantity, orderNumber, orderToken}).then((response) => {
          dispatch ({
                    type: APP_ACTIONS.ADD_PRODUCT_TO_CART,
                    payload: response.body
                  });
        });
      }

    }
  },
  emptyCart: () => {
    return (dispatch, getState) => {
      if (!(getState().order.id === undefined)) {
        let orderNumber = getState().order.number;
        let orderToken = getState().order.token;
        OrdersAPI.destroy({orderNumber, orderToken}).then((response) => {
          dispatch ({
                    type: APP_ACTIONS.DESTROY_ORDER
                  });
          localStorageAPI.clear();
        });
      }
    }
  },

  removeProductFromCart: (lineItemId) => {
    return (dispatch, getState) => {
      let orderNumber = getState().order.number;
        let orderToken = getState().order.token;
      OrdersAPI.removeLineItem({orderNumber, orderToken, lineItemId}).then((response) => {
        dispatch ({

                  type: APP_ACTIONS.REMOVE_LINE_ITEM,
                  payload: lineItemId
                });
        localStorageAPI.save(getState());
      });
    }
  },

  changeProductQuantityFromCart: (variantId, quantity, lineItemId) => {
    return (dispatch, getState) => {
      let orderNumber = getState().order.number;
        let orderToken = getState().order.token;
      OrdersAPI.update({variantId, quantity, orderNumber, orderToken, lineItemId}).then((response) => {
        dispatch ({

                  type: APP_ACTIONS.UPDATE_LINE_ITEM,
                  payload: response.body
                });
        localStorageAPI.save(getState());
      });
    }
  }

};

export default order;
