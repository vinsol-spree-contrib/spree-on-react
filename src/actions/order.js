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

        OrdersAPI.addLineItem({variantId, quantity, orderNumber}).then((response) => {
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
        OrdersAPI.destroy({orderNumber}).then((response) => {
          dispatch ({
                    type: APP_ACTIONS.DESTROY_ORDER
                  });
          localStorageAPI.clear();
        });
      }
    }
  }

};

export default order;
