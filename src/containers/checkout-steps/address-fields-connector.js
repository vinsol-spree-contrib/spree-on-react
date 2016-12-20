import { connect } from 'react-redux';

import Actions from '../../actions';
import AddressFields from '../../components/checkout-steps/address/address-fields';
import StateAPI from '../../apis/state';

const mapStateToProps = (state, ownProps) => {
  return {
    countries: state.countryList.countries
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStatesForCountry: (selectedCountryId) => {
      dispatch (Actions.displayLoader());
      let stateAPIPromise = StateAPI.getByCountry(selectedCountryId).then((response) =>{
        dispatch (Actions.hideLoader());
        return response.body;
      },
      (error) => {
        dispatch (Actions.showFlash(error.response.body.error));
        dispatch (Actions.hideLoader());
        return { states: [] };
      });

      return stateAPIPromise;
    }
  };
};

const AddressFieldsConnector = connect(mapStateToProps, mapDispatchToProps)(AddressFields);

export default AddressFieldsConnector;
