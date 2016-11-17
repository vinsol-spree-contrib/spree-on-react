import { connect } from 'react-redux';

import Actions from '../actions';

import HomePage from '../components/home-page';

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerInitialSetup: () => {
      Actions.fetchProducts().then((response) => {
        let fetchedProducts = JSON.parse(response.text).products;

        dispatch (Actions.addProducts(fetchedProducts));
      });
      // dispatch show loader
      // fetch products
      // dispatch hide loader
    }
  };
};

const HomePageConnector = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnector;
