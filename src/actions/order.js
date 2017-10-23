import APP_ACTIONS from '../constants/app-actions';
import OrdersAPI from '../apis/order';
import LineItemAPI from '../apis/line-item';
import localStorageAPI from '../services/local-storage-api';
import Actions from './';
import { tokenForAPI } from './utils';

const order = {
  clearOrder: () => {
    return (dispatch, getState) => {
      dispatch( { type: APP_ACTIONS.DESTROY_ORDER } );
      localStorageAPI.save(getState());
    };
  },
  /* This is called whenever:
    1. Order is updated.
    2. Moved to a different state in checkout flow. */
  updateOrderInState: (recievedOrder) => {
    return (dispatch, getState) => {
      /*
        receivedOrder can be empty when, for example, a new user is registered
        or when a user with no current order logs in.
      */
      if (!!recievedOrder.id) {
        dispatch ({ type: APP_ACTIONS.CREATE_ORDER, payload: recievedOrder });
        localStorageAPI.save(getState());
      }
    };
  },

  /* If processInBackground is true, we do not show loader and success message.
      but we still show error message however, so the user can refresh the page
      to get the fresh data.
  */
  refreshOrder: (processInBackground = true) => {
    return (dispatch, getState) => {
      let staleOrder = getState().order;
      let orderNumber = staleOrder.number;
      let tokenParam = tokenForAPI(getState().user.token, staleOrder.guest_token);

      OrdersAPI.getItem({ orderNumber, tokenParam }).then((response) => {
        dispatch ({ type: APP_ACTIONS.CREATE_ORDER, payload: response.body });
        localStorageAPI.save(getState());

        if (!processInBackground){
          Actions.showFlash('Retreived fresh data');
        }
      },
      (error) => {
        Actions.showFlash('You are viewing stale data. Please refresh.','danger');
      });
    };
  },

  addProductToCart: (variantId, quantity = 1) => {
    return (dispatch, getState) => {
      let order = getState().order;
      let tokenParam = tokenForAPI(getState().user.token, order.guest_token);
      dispatch(Actions.clearPlacedOrder());

      if (order.id === undefined) {
        return OrdersAPI.create(tokenParam).then((response) => {
          let order = response.body;
          let orderNumber = order.number;
          tokenParam = tokenForAPI(getState().user.token, order.guest_token);
          dispatch ({ type: APP_ACTIONS.CREATE_ORDER, payload: order });
          localStorageAPI.save(getState());

          return dispatch (Actions.addLineItem({ variantId, quantity, orderNumber, tokenParam }));
        });
      }
      else {
        let orderNumber = order.number;

        return dispatch (Actions.addLineItem({ variantId, quantity, orderNumber, tokenParam }));
      }

    }
  },

  emptyCart: (order) => {
    return (dispatch, getState) => {
      let orderNumber = order.number;
      let tokenParam = tokenForAPI(getState().user.token, order.guest_token);

      return OrdersAPI.destroy({ orderNumber, tokenParam }).then((response) => {
        dispatch ({ type: APP_ACTIONS.DESTROY_ORDER });

        localStorageAPI.save(getState());
        return response;
      });
    }
  },

  removeProductFromCart: (lineItemId) => {
    return (dispatch, getState) => {
      let orderFromState = getState().order;
      let orderNumber = orderFromState.number;
      let tokenParam = tokenForAPI(getState().user.token, orderFromState.guest_token);

      return LineItemAPI.destroy({ orderNumber, tokenParam, lineItemId }).then((response) => {
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
      let tokenParam = tokenForAPI(getState().user.token, orderFromState.guest_token);

      return LineItemAPI.update({ quantity, orderNumber, tokenParam, lineItemId }).then((response) => {
        dispatch ({ type: APP_ACTIONS.UPDATE_LINE_ITEM, payload: response.body });

        localStorageAPI.save(getState());
        return response
      });
    }
  },

  addLineItem: (lineItemParams) => {
    return (dispatch, getState) => {

      return LineItemAPI.create(lineItemParams).then((response) => {
        dispatch ({ type: APP_ACTIONS.ADD_PRODUCT_TO_CART, payload: response.body });
        localStorageAPI.save(getState());
        return response;
      });

    };
  }

};

export default order;
