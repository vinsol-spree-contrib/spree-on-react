import React, { Component } from 'react';

import ProductImagePreview from './image-preview';
import ThumbnailList from './thumbnail-list';

import Loader from '../loader';

class ImageViewer extends Component {
  constructor(props) {
    super(props);
    this.handleImageLoad = this.handleImageLoad.bind(this)
    this.onClickThumbnail = this.onClickThumbnail.bind(this)
    this.onMouseOutThumbnail = this.onMouseOutThumbnail.bind(this)
    this.onMouseOverThumbnail = this.onMouseOverThumbnail.bind(this)
    this.state = {
      displayImageLoader: true,
      previewImageNo: 0,
      currentImageNo: 0
    }
  };

  handleImageLoad(){
    this.setState({
      displayImageLoader: false
    })
  };

  onClickThumbnail(imageNo){
    this.setState({
      previewImageNo: imageNo,
      currentImageNo: imageNo
    })
  }

  onMouseOverThumbnail(imageNo){
    this.setState({
      previewImageNo: imageNo,
    })
  }

  onMouseOutThumbnail(){
    this.setState({
      previewImageNo: this.state.currentImageNo,
    })
  }

  render(){
    let productImages = [];
    let previewImage = {};
    let returnString = null;
    if (this.props.productVariant){
      productImages = this.props.productVariant.images;
      previewImage = this.props.productVariant.images[this.state.previewImageNo];
      returnString =  <div>
                        <div className="row">
                          <div className="col-md-12">

                            <Loader displayLoader={this.state.displayImageLoader} />
                            <ProductImagePreview productImage={ previewImage } handleImageLoad={this.handleImageLoad} />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <ThumbnailList images={ productImages }
                                           onClickThumbnail={ this.onClickThumbnail }
                                           onMouseOverThumbnail={ this.onMouseOverThumbnail }
                                           onMouseOutThumbnail={ this.onMouseOutThumbnail } />
                          </div>
                        </div>
                      </div>
    }
    return(
      returnString
    );
  }
};

export default ImageViewer;
