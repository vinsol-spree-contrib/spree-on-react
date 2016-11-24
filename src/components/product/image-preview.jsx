import React, { Component } from 'react';

class ProductImagePreview extends Component {
  render() {
    return (
      <div className="product-show row">
        <div className="col-md-12">
          <img className="product-preview-image" alt={'productName'} src={ process.env.REACT_APP_API_HOST + this.props.productImage.product_url } onLoad={this.props.handleImageLoad}>
          </img>
        </div>
      </div>
    );
  };
};

export default ProductImagePreview;
