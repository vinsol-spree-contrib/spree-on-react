import React, { Component } from 'react';

class PriceRangeFilter extends Component {
  render() {
    return (
      <div className="row price-range-filter-bar">
        <div className="col-md-12">
          <h4>
            Price range
          </h4>

          <div className="list-group">
            <div className="list-group-item">
              <div className="checkbox">
                <label>
                  <input type="checkbox" />
                  <span className="text-danger">Under  $10.00 </span>
                </label>
              </div>
            </div>

            <div className="list-group-item">
              <div className="checkbox">
                <label>
                  <input type="checkbox" />
                  <span className="text-danger">$10.00 - $15.00</span>
                </label>
              </div>
            </div>

            <div className="list-group-item">
              <div className="checkbox">
                <label>
                  <input type="checkbox" />
                  <span className="text-danger">$15.00 or over</span>
                </label>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default PriceRangeFilter;
