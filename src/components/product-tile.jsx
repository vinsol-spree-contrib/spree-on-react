import React, { Component } from 'react';
import { Link } from 'react-router';

class ProductTile extends Component {
  render() {
    let image = this.props.product.master.images[0] || {};
    let productName = this.props.product.name;
    let productShowURL = '/products/' + this.props.product.id;

    return (
      <div className="col-md-3 product-tile">
        <div className="panel panel-default">
          <div className="panel-body text-center">
            <Link to={productShowURL}>
              <div className="row">
                <div className="col-md-12">
                  <img className="product-tile-image" alt={productName} src={'http://localhost:3001' + image.small_url}>
                  </img>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <span className="info" title={productName}>
                    {productName}
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="panel-footer text-center">
            ${ this.props.product.master.price }
          </div>
        </div>
      </div>
    );
  }
}

export default ProductTile;
