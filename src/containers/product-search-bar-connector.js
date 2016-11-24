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
    submitForm: (queryTerm) => {
      ProductsAPI.getSearchedList(queryTerm).then((response) => {
        let fetchedProducts = JSON.parse(response.text).products;
        dispatch(Actions.addProducts(fetchedProducts));
      });
    }
  };
};

const ProductSearchBarConnector = connect(mapStateToProps, mapDispatchToProps)(ProductSearchBar);

export default ProductSearchBarConnector;
