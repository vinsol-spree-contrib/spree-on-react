import { connect } from 'react-redux';

import CartShow from '../../components/cart/show';
import Actions from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: (order) => {
      if (order.id) {
        dispatch(Actions.emptyCart(order)).then((response) => {
          dispatch(Actions.showFlash('Your Cart is now empty!!'));
        },
        (error) => {
          dispatch(Actions.showFlash('Sorry! We were unable to empty your cart. Please try again later.'));
        });
      }
      else{
        dispatch(Actions.showFlash('Your Cart is already empty!!'));
      }
    },

    destroyLineItem: (lineItem) => {
      dispatch(Actions.removeProductFromCart(lineItem.id));
      dispatch(Actions.showFlash('Your Cart is successfully updated!!'));
    },
    changeQuantity: (lineItemId, new_quantity) => {
      if(new_quantity > 0){
        dispatch(Actions.changeProductQuantityFromCart(new_quantity, lineItemId));
        dispatch(Actions.showFlash('Your Product Quantity is successfully updated!!'));
      }
    }

  };
};

const CartShowConnector = connect(mapStateToProps, mapDispatchToProps)(CartShow);

export default CartShowConnector;
