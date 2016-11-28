import React, { Component } from 'react';

class ProductImageThumb extends Component {
  render() {
    return (
      <div className="col-md-2">
        <img className="product-preview-image" alt={'productName'} src={ process.env.REACT_APP_API_HOST + this.props.imageUrl }
             onMouseOver={()=> this.props.onMouseOverThumbnail(this.props.imageNo)}
             onMouseOut={this.props.onMouseOutThumbnail}
             onClick={()=> this.props.onClickThumbnail(this.props.imageNo)}>
        </img>
      </div>
    );
  };
};

export default ProductImageThumb;
