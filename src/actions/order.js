import APP_ACTIONS from '../constants/app-actions';
import OrdersAPI from '../apis/order';
import LineItemAPI from '../apis/line-item';
import localStorageAPI from '../services/local-storage-api';
import Actions from './';

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
      dispatch({ type: APP_ACTIONS.CREATE_ORDER, payload: recievedOrder });
      localStorageAPI.save(getState());
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
      let orderToken = staleOrder.token;

      OrdersAPI.getItem({ orderNumber, orderToken }).then((response) => {
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
      if (order.id === undefined) {
        return OrdersAPI.create({variantId, quantity}).then((response) => {
          let order = response.body;
          let orderNumber = order.number;
          let orderToken = order.token;

          dispatch ({ type: APP_ACTIONS.CREATE_ORDER, payload: order });
          localStorageAPI.save(getState());

          return dispatch(Actions.addLineItem({ variantId, quantity, orderNumber, orderToken }));
        });
      }
      else {
        let orderNumber = order.number;
        let orderToken = order.token;

        return dispatch(Actions.addLineItem({ variantId, quantity, orderNumber, orderToken }));
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

      return LineItemAPI.destroy({orderNumber, orderToken, lineItemId}).then((response) => {
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

      return LineItemAPI.update({ quantity, orderNumber, orderToken, lineItemId }).then((response) => {
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
