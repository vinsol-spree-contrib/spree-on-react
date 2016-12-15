import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Actions from '../actions';

import ProductsAPI from '../apis/products';

import SearchModal from '../components/search-modal';

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (searchTerm) => {
      dispatch(push({pathname: '/', query: { searchTerm: searchTerm }}));
    }
  };
};

const SearchModalConnector = connect(mapStateToProps, mapDispatchToProps)(SearchModal);

export default SearchModalConnector;
