import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Actions from '../../actions';
import ProductsAPI from '../../apis/products';
import FilterBar from '../../components/taxon-filters/filter-bar';

const mapStateToProps = (state, ownProps) => {
  return {
    taxons: state.taxons
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleTaxonClick: (taxon_id, taxon_permalink) => {
      dispatch (Actions.displayLoader());

      ProductsAPI.getCategorizedList(taxon_id).then((response) => {
        if(response.statusCode === 200) {
          dispatch (Actions.addProducts(response.body));
          dispatch (push('/t/' + taxon_permalink))
          dispatch (Actions.hideLoader())
        }
        else {
          dispatch (Actions.showFlash('Sorry, unable to fetch products at this time. Please try again later.'));
        }
      });
    }
  };
};

const FilterBarConnector = connect(mapStateToProps, mapDispatchToProps)(FilterBar);

export default FilterBarConnector;
