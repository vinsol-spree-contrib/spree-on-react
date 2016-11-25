import { connect } from 'react-redux';

import Actions from '../actions';
import ProductsAPI from '../apis/products';
import TaxonomyAPI from '../apis/taxonomies';
import HomePage from '../components/home-page';

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerInitialSetup: () => {
      // dispatch show loader
      ProductsAPI.getList().then((response) => {
        let fetchedProducts = JSON.parse(response.text).products;

        dispatch (Actions.addProducts(fetchedProducts));
      });

      TaxonomyAPI.getList().then((response) => {
        let fetchedTaxonomies = JSON.parse(response.text).taxonomies;

        dispatch (Actions.addTaxonomies(fetchedTaxonomies));
      });
      // dispatch hide loader
    }
  };
};

const HomePageConnector = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnector;
