import { connect } from 'react-redux';

import Actions from '../actions';

import ProductsAPI from '../apis/products';

import ProductSearchBar from '../components/product-search-bar';

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (searchTerm) => {
      dispatch (Actions.displayLoader());

      ProductsAPI.getList({searchTerm: searchTerm}).then((response) => {
        if(response.statusCode === 200) {
          let fetchedProducts = JSON.parse(response.text);
          dispatch (Actions.addProducts(fetchedProducts));
          dispatch (Actions.hideLoader());
        }
      });
    }
  };
};

const ProductSearchBarConnector = connect(mapStateToProps, mapDispatchToProps)(ProductSearchBar);

export default ProductSearchBarConnector;
