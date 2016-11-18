import React, { Component } from 'react';

import TaxonomyFilterBar from './taxonomy-filter-bar';

class FilterBar extends Component {
  render() {
    const taxonFilterMarkup = this.props.taxonomies.map((taxonomy, idx) => {
      return (
        <TaxonomyFilterBar key={idx} taxonomy={taxonomy} />
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
