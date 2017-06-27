import React, { Component } from 'react';

import URLSanitizer from '../../services/url-sanitizer';

class ProductImagePreview extends Component {

  render() {
    let imageUrl = URLSanitizer.makeAbsolute(this.props.productImage.large_url);

    return (
      <div className="product-img">
          <div className="product-img-block">
            <span className="product-image-holder">
              <img className="product-preview-image product-image"
                    alt={'productName'}
                    src={ imageUrl }
                    onLoad={this.props.handleImageLoad}>
              </img>
            </span>
          </div>
      </div>
    );
  };
};

export default ProductImagePreview;
