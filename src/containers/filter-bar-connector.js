import { connect } from 'react-redux';

import FilterBar from '../components/filter-bar';

const mapStateToProps = (state, ownProps) => {
  return {
    taxonomies: state.taxonomies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const FilterBarConnector = connect(mapStateToProps, mapDispatchToProps)(FilterBar);

export default FilterBarConnector;
