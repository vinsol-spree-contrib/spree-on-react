import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Actions from '../actions';
import ProductsAPI from '../apis/products';
import SearchForm from '../components/shared/header/search-form';
import UrlParser from '../services/url-parser';

const mapStateToProps = (state, ownProps) => {
  return {
    searchTerm: UrlParser.getQueryVariable('searchTerm')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitSearchForm: (searchTerm) => {
      dispatch (Actions.displayLoader());

      ProductsAPI.getList({searchTerm: searchTerm}).then((response) => {
        let fetchedProducts = response.body;

        if (fetchedProducts.products.length === 0) {
          dispatch (Actions.showFlash(`No products found matching ${ searchTerm } `, 'danger'));
        }
        else {
          dispatch (Actions.addProducts(fetchedProducts));
          dispatch (push({pathname: '/', query: { searchTerm: searchTerm }}));
        }

        dispatch (Actions.hideLoader());
      });

    }
  };
};

const SearchFormConnector = connect(mapStateToProps, mapDispatchToProps)(SearchForm);

export default SearchFormConnector;
