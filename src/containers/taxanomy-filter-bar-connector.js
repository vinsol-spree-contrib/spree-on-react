import { connect } from 'react-redux';

import Actions from '../actions';

import ProductsAPI from '../apis/products';

import TaxonomyFilterBar from '../components/taxonomy-filter-bar.jsx';
import {push} from 'react-router-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    taxanomy: ownProps.taxanomy,
    products: state.products,
    displayLoader: state.displayLoader
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickTaxon: (taxon_id, taxon_permalink) => {
      dispatch (Actions.displayLoader());
      ProductsAPI.getCategorizedList(taxon_id).then((response) => {
        if(response.statusCode === 200) {
          let fetchedProducts = JSON.parse(response.text).products;
          dispatch(Actions.addProducts(fetchedProducts));
          dispatch(push('/t/' + taxon_permalink))
          dispatch (Actions.hideLoader())
        }
      });
    }
  };
};

const TaxonomyFilterBarConnector = connect(mapStateToProps, mapDispatchToProps)(TaxonomyFilterBar);

export default TaxonomyFilterBarConnector;
