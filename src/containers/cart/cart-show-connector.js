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
          dispatch(Actions.showFlash('Sorry! We were unable to empty your cart. Please try again later.', 'danger'));
        });
      }
      else{
        dispatch(Actions.showFlash('Your Cart is already empty!!'));
      }
    },

    destroyLineItem: (lineItem) => {
      dispatch(Actions.removeProductFromCart(lineItem.id)).then(response => {
        dispatch(Actions.showFlash('Line Item removed from the cart.'));
      },
      (error) => {
        dispatch(Actions.showFlash('Unable to remove line item from cart!!', 'danger'));
      });
    },

    changeQuantity: (lineItemId, quantity) => {
      if (parseInt(quantity) > 0) {
        dispatch(Actions.changeProductQuantityFromCart(quantity, lineItemId)).then((response) => {
          dispatch(Actions.showFlash('Your Product Quantity is successfully updated!!'));
        },
        (error) => {
          dispatch(Actions.showFlash('Unable to update the product quantity', 'danger'));
        });
      }
      else {
        dispatch(Actions.showFlash('Quantity must be numeric and greater than zero.', 'danger'));
      }
    }

  };
};

const CartShowConnector = connect(mapStateToProps, mapDispatchToProps)(CartShow);

export default CartShowConnector;
