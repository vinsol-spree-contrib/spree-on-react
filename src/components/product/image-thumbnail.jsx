import React, { Component } from 'react';

class ProductImageThumb extends Component {
  render() {
    return (
      <div className="col-sm-4 col-xs-4 thumbnail">
        <img className="product-preview-image img-responsive img-center" alt={'productName'} src={ process.env.REACT_APP_API_HOST + this.props.imageUrl }
             onMouseOver={()=> this.props.onMouseOverThumbnail(this.props.imageNo)}
             onMouseOut={this.props.onMouseOutThumbnail}
             onClick={()=> this.props.onClickThumbnail(this.props.imageNo)}>
        </img>
      </div>
    );
  };
};

export default ProductImageThumb;
