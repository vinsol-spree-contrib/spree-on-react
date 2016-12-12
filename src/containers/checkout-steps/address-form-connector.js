import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Actions from '../../actions';
import AddressForm from '../../components/checkout-steps/address-form';
import CountryAPI from '../../apis/country';

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order,
    displayLoader: state.displayLoader,
    countries: state.countryList.countries
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddressFormSubmit: (formData, order) => {
      dispatch (Actions.goToNextStep(order, formData));
    },
    fetchCountries: () => {
      dispatch (Actions.displayLoader());

      CountryAPI.getList().then((response) => {
        dispatch (Actions.addCountries(response.body));
        dispatch (Actions.hideLoader());
      },
      (error) => {
        dispatch(Actions.showFlash('Unable to connect to server... Please try again later.'));
      })
    },

    handleOrderNotPresent: () => {
      dispatch (push('/cart'));
      dispatch(Actions.showFlash("Your cart is empty!", 'danger'));
    }
  };
};

const AddressFormConnector = connect(mapStateToProps, mapDispatchToProps)(AddressForm);

export default AddressFormConnector;
