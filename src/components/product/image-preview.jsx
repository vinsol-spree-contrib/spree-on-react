import React, { Component } from 'react';

class ProductImagePreview extends Component {
  render() {
    return (
      <div className="product-img col-md-12">
          <div className="product-img-block">
            <img className="product-preview-image img-responsive img-center" alt={'productName'} src={ process.env.REACT_APP_API_HOST + this.props.productImage.large_url } onLoad={this.props.handleImageLoad}>
            </img>
          </div>
      </div>
    );
  };
};

export default ProductImagePreview;
