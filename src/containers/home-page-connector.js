import { connect } from 'react-redux';

import Actions from '../actions';
import TaxonAPI from '../apis/taxons';
import HomePage from '../components/home-page';

import UrlParser from '../services/url-parser';

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.productList.products,
    displayLoader: state.displayLoader,
    pageCount: state.productList.meta.total_pages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerInitialSetup: (pathname) => {
      dispatch (Actions.displayLoader());

      TaxonAPI.getList().then((response) => {
        let fetchedTaxons = response.body.taxons;
        dispatch (Actions.addTaxons(fetchedTaxons));

        let searchTerm = UrlParser.getQueryVariable('searchTerm') || '';

        dispatch (Actions.fetchProducts({ searchTerm: searchTerm })).then((response) => {
          let fetchedProducts = response.body;

          dispatch (Actions.addProducts(fetchedProducts));
          dispatch (Actions.hideLoader());
        });

      },

      (error) => {
        dispatch (Actions.hideLoader());
        dispatch (Actions.showFlash('Unable to connect to server. Please try again later.', 'danger'));
      });
    },

    loadMoreProducts: (pageNo) => {
      let searchTerm = UrlParser.getQueryVariable('searchTerm') || '';

      return dispatch (Actions.fetchProducts({ page_no: pageNo, searchTerm: searchTerm })).then((response) => {
        dispatch (Actions.appendProducts(response.body));
      });
    }
  };
};

const HomePageConnector = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnector;
