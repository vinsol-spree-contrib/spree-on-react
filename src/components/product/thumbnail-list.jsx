import React, { Component } from 'react';
import ProductImageThumb from './image-thumbnail';

class ThumbnailList extends Component {
  render() {
    let imagesMarkup;

    imagesMarkup = this.props.images.map((image, idx) => {
      return (
        <ProductImageThumb key={ "thumbnail-image-" + idx } imageUrl={ image.mini_url }
                            onClickThumbnail={this.props.onClickThumbnail}
                            onMouseOverThumbnail={this.props.onMouseOverThumbnail}
                            onMouseOutThumbnail={this.props.onMouseOutThumbnail}
                            imageNo={idx} />
      );
    });

    return (
      <div className="thumbnail-block-container">
        { imagesMarkup }
      </div>
    );
  };
};

export default ThumbnailList;
