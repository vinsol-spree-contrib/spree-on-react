import { connect } from 'react-redux';

import CartShow from '../../components/cart/show';

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const CartShowConnector = connect(mapStateToProps, mapDispatchToProps)(CartShow);

export default CartShowConnector;
