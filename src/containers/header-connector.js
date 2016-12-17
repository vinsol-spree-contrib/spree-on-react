import { connect } from 'react-redux';

import Header from '../components/header';
import Actions from '../actions';
import TaxonAPI from '../apis/taxons';

const mapStateToProps = (state, ownProps) => {
  return {
    taxons: state.taxons
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTaxons: (taxons) => {
      if (taxons.length === 0) {
        dispatch (Actions.displayLoader());

        TaxonAPI.getList().then((response) => {
          dispatch (Actions.addTaxons(response.body));
          dispatch (Actions.hideLoader());
        });
      }
    }
  };
};

const HeaderConnector = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderConnector;
