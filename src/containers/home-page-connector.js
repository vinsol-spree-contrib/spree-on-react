import { connect } from 'react-redux';

import Actions from '../actions';
import ProductsAPI from '../apis/products';
import TaxonomyAPI from '../apis/taxonomies';
import HomePage from '../components/home-page';

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.productList.products,
    displayLoader: state.displayLoader,
    pageCount: state.productList.pages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerInitialSetup: () => {
      dispatch (Actions.displayLoader());

      let fetchProductsPromise = ProductsAPI.getList().then((response) => {
        let fetchedProducts = JSON.parse(response.text);
        dispatch (Actions.addProducts(fetchedProducts));
      });

      let fetchTaxonomiesPromise = TaxonomyAPI.getList().then((response) => {
        let fetchedTaxonomies = JSON.parse(response.text).taxonomies;

        dispatch (Actions.addTaxonomies(fetchedTaxonomies));
      });

      Promise.all([fetchProductsPromise, fetchTaxonomiesPromise]).then((response) => {
        dispatch (Actions.hideLoader());
        dispatch(Actions.setFlash('Products Successfully loaded!!', 'notice'));

        setTimeout(function(){
          dispatch(Actions.hideFlash())
        }, 5000)
      });
    },
    loadMore: (page_no) => {
      ProductsAPI.getList(page_no).then((response) => {
        let fetchedProducts = JSON.parse(response.text);
        dispatch(Actions.addProducts(fetchedProducts));
      });
    }
  };
};

const HomePageConnector = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnector;
