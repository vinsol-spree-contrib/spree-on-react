import React, { Component } from 'react';

import URLSanitizer from '../../services/url-sanitizer';

class ProductImagePreview extends Component {

  render() {
    let imageUrl = URLSanitizer.makeAbsolute(this.props.productImage.large_url);

    return (
      <div className="product-img col-md-12">
          <div className="product-img-block">
            <img className="product-preview-image img-responsive img-center" alt={'productName'} src={ imageUrl } onLoad={this.props.handleImageLoad}>
            </img>
          </div>
      </div>
    );
  };
};

export default ProductImagePreview;
