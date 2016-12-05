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
    }
  };
};

const CartShowConnector = connect(mapStateToProps, mapDispatchToProps)(CartShow);

export default CartShowConnector;
