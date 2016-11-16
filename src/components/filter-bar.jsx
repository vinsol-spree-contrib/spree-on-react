import React, { Component } from 'react';

import CategoryFilter from './category-filter';
import BrandFilter from './brand-filter';

class FilterBar extends Component {
  render() {
    return (
      <div className="row filter-bar">
        <div className="col-md-12">
          <CategoryFilter />

          <BrandFilter />
        </div>
      </div>
    );
  }
}

export default FilterBar;
