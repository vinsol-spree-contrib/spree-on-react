import React, { Component } from 'react';

class PriceRangeFilter extends Component {
  render() {
    return (
      <div className="row category-filter-bar">
        <div className="col-md-12">
          <h4>
            Shop By Categories
          </h4>

          <div className="list-group">
            <div className="list-group-item">
              Bags
            </div>

            <div className="list-group-item">
              Mugs
            </div>

            <div className="list-group-item">
              Clothing
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PriceRangeFilter;
