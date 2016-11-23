import React, { Component } from 'react';

class ProductImageLarge extends Component {
  render() {
    return (
      <div className="product-show row">
        <div className="col-md-12">
          <img className="product-large-image" alt={'productName'} src={ process.env.REACT_APP_API_HOST + this.props.productImage.product_url }>
          </img>
        </div>
      </div>
    );
  };
};

export default ProductImageLarge;
