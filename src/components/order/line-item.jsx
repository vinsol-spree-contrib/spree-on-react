import React, { Component } from 'react';

import URLSanitizer from '../../services/url-sanitizer';

class LineItem extends Component {
  render() {
    let { lineItem } = this.props;
    let image = lineItem.variant.images[0];
    let imageUrl = URLSanitizer.makeAbsolute(image.mini_url);

    return (
      <div className="row shipment-line-item checkout-line-item-row order-items-row">
        <div className="col-sm-2 col-xs-4 checkout-line-item-image-block order-items-image-block">
          <img className="shipment-line-item-image"
                alt={ lineItem.variant.name }
                src={ imageUrl } />
        </div>

        <div className="col-sm-10 col-xs-8 order-items-content-block">
          <strong>{ lineItem.variant.name }</strong>
          <p>
            { `${ lineItem.variant.display_price } x ${ lineItem.quantity }` }
          </p>
        </div>
      </div>
    );
  };
};

export default LineItem;
