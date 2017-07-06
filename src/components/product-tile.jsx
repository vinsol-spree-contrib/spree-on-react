import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import URLSanitizer from '../services/url-sanitizer';

import styles from './styles/components/product-tile.scss';

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
      addToCartMarkup = <a className={ " " + styles.productHoverButton }>
                          <span className="glyphicon glyphicon-ok info-elem"></span>
                        </a>;
    }
    else {
      addToCartMarkup = <a href="#" className={ " " + styles.productHoverButton } onClick={ this.addProductToCart }>
                          <span className="glyphicon glyphicon-shopping-cart info-elem"></span>
                        </a>;
    }

    return addToCartMarkup;
  };

  render() {
    let image = this.props.product.master.images[0] || {};
    let productName = this.props.product.name;
    let productShowURL = '/products/' + this.props.product.slug;
    let imageUrl = URLSanitizer.makeAbsolute(image.product_url);
    return (
      <div className="col-md-3 col-sm-4 col-xs-6 product-tile">
        <div className={ " " + styles.productBlock }>
          <div className={ "thumb-img-block " + styles.productImageBlock }>
            <Link to={ productShowURL } className={ "product-link " + styles.productImageHolder }>
              <img className={ "product-tile-image " + styles.productMainImage }
                   alt={ productName }
                   src={ imageUrl }>
              </img>
            </Link>

            <aside className={ " " + styles.productHoverInfo }>
              { this._addToCartMarkup() }
              <a href="#" className={ " " + styles.productHoverButton }><span className="glyphicon glyphicon-heart info-elem"></span></a>
            </aside>
          </div>

          
          <div className={ " " + styles.productInfoBlock }>
            <div className="caption-info text-truncate" title={ productName} >
              <Link to={ productShowURL } className={ " " + styles.productTitle }>
                { productName }
              </Link>
            </div>
            ${ this.props.product.master.price }
          </div>

        </div>
      </div>
    );
  };
};

export default ProductTile;
