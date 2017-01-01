import React, { Component } from 'react';
import { Link } from 'react-router';

import URLSanitizer from '../services/url-sanitizer';

class ProductTile extends Component {
  constructor(props){
    super(props);

    this.addProductToCart = this.addProductToCart.bind(this);
  };

  addProductToCart () {
    this.props.addProductToCart(this.props.product.master.id, 1);
  };

  _addToCartMarkup () {
    let addToCartMarkup;

    if (this.props.productInCart) {
      addToCartMarkup = <a>
          <span className="glyphicon glyphicon-ok info-elem"></span>
        </a>;
    }
    else {
      addToCartMarkup = <a onClick={ this.addProductToCart }>
          <span className="glyphicon glyphicon-shopping-cart info-elem"></span>
        </a>;
    }

    return addToCartMarkup;
  };

  render() {
    let image = this.props.product.master.images[0] || {};
    let productName = this.props.product.name;
    let productShowURL = '/products/' + this.props.product.id;
    let imageUrl = URLSanitizer.makeAbsolute(image.product_url);
    return (
      <div className="col-md-4 col-sm-6 col-xs-12 product-tile">
        <div className="thumbnail text-center row no-margin">
          <div className="col-sm-12 col-xs-12 thumb-img-block">
            <Link to={ productShowURL } className="product-link"></Link>
            <img className="product-tile-image img-responsive"
                 alt={ productName }
                 src={ imageUrl }>
            </img>

            <aside className="hover-info">
              <div className="product-btns">
                { this._addToCartMarkup() }
                <a><span className="glyphicon glyphicon-heart info-elem"></span></a>
              </div>
            </aside>
          </div>

          <Link to={ productShowURL }>
            <div className="text-center col-sm-12 col-xs-12 product-text-info oswald">
              <div className="caption-info text-truncate" title={ productName} >
                { productName }
              </div>
              ${ this.props.product.master.price }
            </div>
          </Link>

        </div>
      </div>
    );
  };
};

export default ProductTile;
