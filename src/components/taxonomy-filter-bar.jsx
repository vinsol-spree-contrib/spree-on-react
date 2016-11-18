import React, { Component } from 'react';

import TaxonFilter from './taxon-filter';

class TaxonomyFilterBar extends Component {
  render() {
    let categoryName = this.props.taxonomy.name
    let taxonMarkup = this.props.taxonomy.root.taxons.map((taxon, idx) => {
      return (
        <TaxonFilter key={ idx } taxon={ taxon } />
      )
    });

    return (
      <div className="row category-filter-bar">
        <div className="col-md-12">
          <h4>
            Shop By { categoryName }
          </h4>

          <div className="list-group">
            { taxonMarkup }
          </div>
            
        </div>
      </div>

    );
  }
}

export default TaxonomyFilterBar;
