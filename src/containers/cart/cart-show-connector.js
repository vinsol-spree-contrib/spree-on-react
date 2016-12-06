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
    emptyCart: () => {
      dispatch(Actions.emptyCart());
      dispatch(Actions.showFlash('Your Cart is now empty!!'));
    },
    destroyLineItem: (lineItem) => {
      dispatch(Actions.removeProductFromCart(lineItem.id));
      dispatch(Actions.showFlash('Your Cart is successfully updated!!'));
    },
    changeQuantity: (lineItemId, lineItemVarientId, new_quantity) => {
      if(new_quantity > 0){
        dispatch(Actions.changeProductQuantityFromCart(lineItemVarientId, new_quantity, lineItemId));
        dispatch(Actions.showFlash('Your Product Quantity is successfully updated!!'));
      }
    }

  };
};

const CartShowConnector = connect(mapStateToProps, mapDispatchToProps)(CartShow);

export default CartShowConnector;
