import React, { Component } from 'react';

class ProductImageThumb extends Component {
  constructor(props){
    super(props);
    this.onMouseOverThumbnail = this.onMouseOverThumbnail.bind(this);
    this.onClickThumbnail = this.onClickThumbnail.bind(this);
  }
  onMouseOverThumbnail(){
    this.props.onMouseOverThumbnail(this.props.imageNo)
  }
  onClickThumbnail(){
    this.props.onClickThumbnail(this.props.imageNo)
  }
  render() {
    return (
      <div className="col-md-2">
        <img className="product-preview-image" alt={'productName'} src={ process.env.REACT_APP_API_HOST + this.props.imageUrl }
             onMouseOver={this.onMouseOverThumbnail}
             onMouseOut={this.props.onMouseOutThumbnail}
             onClick={this.onClickThumbnail}>
        </img>
      </div>
    );
  };
};

export default ProductImageThumb;
