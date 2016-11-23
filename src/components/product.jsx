import React, { Component } from 'react';
import { Link } from 'react-router';

class Product extends Component {
  render() {
    return (
      <div className="col-md-3 product-tile">
        Product - { this.props.routeParams.productId }
      </div>
    );
  }
}

export default Product;
