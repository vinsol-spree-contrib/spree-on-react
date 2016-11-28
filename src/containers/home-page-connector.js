import { connect } from 'react-redux';

import Actions from '../actions';
import ProductsAPI from '../apis/products';
import TaxonomyAPI from '../apis/taxonomies';
import HomePage from '../components/home-page';

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
    displayLoader: state.displayLoader
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerInitialSetup: () => {
      dispatch (Actions.displayLoader());

      const fetchProductsPromise = ProductsAPI.getList().then((response) => {
        let fetchedProducts = JSON.parse(response.text).products;

        dispatch (Actions.addProducts(fetchedProducts));
      });

      const fetchTaxonomiesPromise = TaxonomyAPI.getList().then((response) => {
        let fetchedTaxonomies = JSON.parse(response.text).taxonomies;

        dispatch (Actions.addTaxonomies(fetchedTaxonomies));
      });

      Promise.all([fetchProductsPromise, fetchTaxonomiesPromise]).then((response) => {
        dispatch (Actions.hideLoader());
      });
    }
  };
};

const HomePageConnector = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnector;
