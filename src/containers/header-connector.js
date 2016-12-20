import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Header from '../components/header';
import Actions from '../actions';
import TaxonAPI from '../apis/taxons';
import APP_ROUTES from '../constants/app-routes';

const mapStateToProps = (state, ownProps) => {
  return {
    taxons: state.taxons,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTaxons: (taxons) => {
      if (taxons.length === 0) {
        dispatch (Actions.displayLoader());

        TaxonAPI.getList().then((response) => {
          dispatch (Actions.addTaxons(response.body.taxons));
          dispatch (Actions.hideLoader());
        });
      }
    },

    logout: () => {
      dispatch(Actions.logout());
      dispatch(push(APP_ROUTES.homePageRoute));
    }
  };
};

const HeaderConnector = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderConnector;
