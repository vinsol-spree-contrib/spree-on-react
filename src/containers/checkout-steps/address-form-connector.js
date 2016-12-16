import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Actions from '../../actions';
import APP_ACTIONS from '../../constants/app-actions';
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
    setCurrentCheckoutStep: () => {
      dispatch ({
        type: APP_ACTIONS.SET_CURRENT_CHECKOUT_STEP,
        payload: 'address'
      });
    },

    handleAddressFormSubmit: (formData, order) => {
      return dispatch (Actions.goToNextStep(order, formData));
    },

    fetchCountries: () => {
      dispatch (Actions.displayLoader());

      CountryAPI.getList().then((response) => {
        dispatch (Actions.addCountries(response.body));
        dispatch (Actions.hideLoader());
      },
      (error) => {
        dispatch (Actions.showFlash('Unable to connect to server... Please try again later.'));
      })
    },

    handleOrderNotPresent: () => {
      dispatch (push('/cart'));
      dispatch (Actions.showFlash("Your cart is empty!", 'danger'));
    }
  };
};

const AddressFormConnector = connect(mapStateToProps, mapDispatchToProps)(AddressForm);

export default AddressFormConnector;
