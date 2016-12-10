import { connect } from 'react-redux';

import Actions from '../../actions';
import DeliveryForm from '../../components/checkout-steps/delivery-form';

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order,
    displayLoader: state.displayLoader
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDeliveryFormSubmit: (formData, order) => {
      dispatch (Actions.goToNextStep(order, formData));
    }
  };
};

const DeliveryFormConnector = connect(mapStateToProps, mapDispatchToProps)(DeliveryForm);

export default DeliveryFormConnector;
