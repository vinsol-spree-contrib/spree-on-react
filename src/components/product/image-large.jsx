import React, { Component } from 'react';

class ProductImageLarge extends Component {
  render() {
    let thisImage;

    if (this.props.product.master) {
      thisImage = this.props.product.master.images[0].product_url;
    }
    else {
      thisImage = '';
    }
    return (
      <div className="product-show row">
        <div className="col-md-12">
          <img className="product-large-image" alt={'productName'} src={'http://localhost:3001' + thisImage}>
          </img>
        </div>
      </div>
    );
  }
}

export default ProductImageLarge;
