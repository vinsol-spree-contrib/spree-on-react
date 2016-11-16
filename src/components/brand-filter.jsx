import React, { Component } from 'react';

class BrandFilter extends Component {
  render() {
    return (
      <div className="row category-filter-bar">
        <div className="col-md-12">
          <h4>
            Shop By Brand
          </h4>

          <div className="list-group">
            <div className="list-group-item">
              Ruby
            </div>

            <div className="list-group-item">
              Apache
            </div>

            <div className="list-group-item">
              Spree
            </div>

            <div className="list-group-item">
              Rails
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BrandFilter;
