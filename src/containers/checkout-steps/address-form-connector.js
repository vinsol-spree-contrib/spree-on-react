import { connect } from 'react-redux';

import Actions from '../../actions';
import AddressForm from '../../components/checkout-steps/address-form';

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddressFormSubmit: (formData, order) => {
      // this.showLoader
      // send submit request
      // hideLoader
    }
  };
};

const AddressFormConnector = connect(mapStateToProps, mapDispatchToProps)(AddressForm);

export default AddressFormConnector;
