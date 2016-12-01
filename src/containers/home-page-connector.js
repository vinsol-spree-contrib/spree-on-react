import { connect } from 'react-redux';

import Actions from '../actions';
import ProductsAPI from '../apis/products';
import TaxonAPI from '../apis/taxons';
import HomePage from '../components/home-page';

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
    displayLoader: state.displayLoader
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerInitialSetup: (pathname) => {
      dispatch (Actions.displayLoader());

      TaxonAPI.getList().then((response) => {
        let fetchedTaxons = JSON.parse(response.text).taxons;
        dispatch (Actions.addTaxons(fetchedTaxons));

        if (pathname === '/') {
          ProductsAPI.getList().then((response) => {
            let fetchedProducts = JSON.parse(response.text).products;

            dispatch (Actions.addProducts(fetchedProducts));
            dispatch (Actions.hideLoader());
          });
        }
        else {
          dispatch(Actions.fetchProductsByTaxon()).then((response) => {
            let fetchedProducts = JSON.parse(response.text).products;

            dispatch (Actions.addProducts(fetchedProducts));
            dispatch (Actions.hideLoader());
          });
        }

      });

    }
  };
};

const HomePageConnector = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnector;
