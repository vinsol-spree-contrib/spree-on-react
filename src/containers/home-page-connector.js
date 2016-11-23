import { connect } from 'react-redux';

import Actions from '../actions';

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
      // dispatch show loader
      dispatch (Actions.displayLoader());

      // fetch products
      Actions.fetchProducts().then((response) => {
        let fetchedProducts = JSON.parse(response.text).products;

        dispatch (Actions.addProducts(fetchedProducts));
        dispatch (Actions.hideLoader());
      });

      Actions.fetchTaxonomies().then((response) => {
        let fetchedTaxonomies = JSON.parse(response.text).taxonomies;

        dispatch (Actions.addTaxonomies(fetchedTaxonomies));
      });
      // dispatch hide loader
    }
  };
};

const HomePageConnector = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnector;
