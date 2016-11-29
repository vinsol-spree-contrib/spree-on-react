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
        dispatch ({
                  type: APP_ACTIONS.ADD_LINE_ITEM,
                  variantId,
                  quantity
                });
      }
      
    }
  }

};

export default order;
