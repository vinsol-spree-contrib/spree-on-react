import React, { Component } from 'react';

class ProductImageThumb extends Component {
  render() {
    return (
      <div className="col-md-2">
        <img className="product-large-image" alt={'productName'} src={ process.env.REACT_APP_API_HOST + this.props.imageUrl }>
        </img>
      </div>
    );
  };
};

export default ProductImageThumb;
