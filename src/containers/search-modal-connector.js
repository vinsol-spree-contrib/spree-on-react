import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Actions from '../actions';

import ProductsAPI from '../apis/products';

import SearchModal from '../components/search-modal';

import UrlParser from '../services/url-parser';

const mapStateToProps = (state, ownProps) => {
  return {
    searchTerm: UrlParser.getQueryVariable('searchTerm')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (searchTerm) => {
      dispatch (Actions.displayLoader());
      ProductsAPI.getList({searchTerm: searchTerm}).then((response) => {
        let fetchedProducts = response.body;
        dispatch (Actions.addProducts(fetchedProducts));
        dispatch (Actions.hideLoader());
      });
      dispatch (push({pathname: '/', query: { searchTerm: searchTerm }}));
    }
  };
};

const SearchModalConnector = connect(mapStateToProps, mapDispatchToProps)(SearchModal);

export default SearchModalConnector;
