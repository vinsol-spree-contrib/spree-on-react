import React, { Component } from 'react';

import TaxonomyFilterBarConnector  from '../containers/taxanomy-filter-bar-connector.js';

class FilterBar extends Component {
  render() {
    const taxonFilterMarkup = this.props.taxonomies.map((taxonomy, idx) => {
      return (
        <TaxonomyFilterBarConnector key={idx} taxonomy={taxonomy} />
      )
    });

    return (
      <div className="row filter-bar">
        <div className="col-md-12">
          { taxonFilterMarkup }
        </div>
      </div>
    );
  }
}

export default FilterBar;
