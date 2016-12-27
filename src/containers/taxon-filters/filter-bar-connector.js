import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Actions from '../../actions';
import FilterBar from '../../components/taxon-filters/filter-bar';
import APP_ROUTES from '../../constants/app-routes';

const mapStateToProps = (state, ownProps) => {
  return {
    taxons: state.taxons
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleTaxonClick: (taxon_permalink) => {
      dispatch (Actions.displayLoader());
      dispatch (push('/t/' + taxon_permalink));

      dispatch (Actions.fetchProducts()).then((response) => {

        if(response.statusCode === 200) {
          dispatch (Actions.addProducts(response.body));
          dispatch (Actions.hideLoader());
        }
        else {
          dispatch (Actions.showFlash('Sorry, unable to fetch products at this time. Please try again later.', 'danger'));
          dispatch (push(APP_ROUTES.homePageRoute));
        }
      });
    }
  };
};

const FilterBarConnector = connect(mapStateToProps, mapDispatchToProps)(FilterBar);

export default FilterBarConnector;
