import React, { Component } from 'react';

import URLSanitizer from '../../services/url-sanitizer';

class LineItem extends Component {
  render() {
    let { lineItem } = this.props;
    let image = lineItem.variant.images[0];
    let imageUrl = URLSanitizer.makeAbsolute(image.mini_url);

    return (
      <div className="shipment-line-item clearfix">
        <div className="col-md-2 col-sm-2 col-xs-4 thumsbnail">
          <img className="shipment-line-item-image img-responsive img-center"
                alt={ lineItem.variant.name }
                src={ imageUrl } />
        </div>

        <div className="col-md-10 col-sm-10 col-xs-8">
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
