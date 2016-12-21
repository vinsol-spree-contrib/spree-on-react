import { connect } from 'react-redux';

import Actions from '../actions';
import ProductsAPI from '../apis/products';
import TaxonAPI from '../apis/taxons';
import HomePage from '../components/home-page';

import UrlParser from '../services/url-parser';

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.productList.products,
    displayLoader: state.displayLoader,
    pageCount: state.productList.pages,
    currentPage: state.productList.current_page
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerInitialSetup: (pathname) => {
      dispatch (Actions.displayLoader());

      TaxonAPI.getList().then((response) => {
        let fetchedTaxons = response.body.taxons;
        dispatch (Actions.addTaxons(fetchedTaxons));

        if (pathname === '/') {
          let searchTerm = UrlParser.getQueryVariable('searchTerm') || ''
          ProductsAPI.getList({searchTerm: searchTerm}).then((response) => {
            let fetchedProducts = response.body;

            dispatch (Actions.addProducts(fetchedProducts));
            dispatch (Actions.hideLoader());
          });
            // let fetchedProducts = JSON.parse(response.text);
        } else {
          dispatch(Actions.fetchProductsByTaxon()).then((response) => {
            let fetchedProducts = response.body;

            dispatch (Actions.addProducts(fetchedProducts));
            dispatch (Actions.hideLoader());
          });
        }

      },

      (error) => {
        dispatch (Actions.hideLoader());
        dispatch (Actions.showFlash('Unable to connect to server. Please try again later.', 'danger'));
      });
    },

    loadMore: (page_no) => {
      let searchTerm = UrlParser.getQueryVariable('searchTerm') || ''
      ProductsAPI.getList({page_no: page_no, searchTerm: searchTerm}).then((response) => {
        dispatch (Actions.appendProducts(response.body));
      });
    }
  };
};

const HomePageConnector = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnector;
