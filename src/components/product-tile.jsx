import React, { Component } from 'react';
import { Link } from 'react-router';

class ProductTile extends Component {
  render() {
    let image = this.props.product.master.images[0] || {};
    let productName = this.props.product.name;
    let productShowURL = '/products/' + this.props.product.id;
    
    return (
      <div className="col-md-3 col-sm-6 col-xs-12 product-tile">
        <div className="thumbnail text-center row no-margin">
          <div className="col-sm-12 col-xs-12 thumb-img-block">
            <Link to={productShowURL}>
              <img className="product-tile-image img-responsive" alt={productName} src={'http://localhost:3001' + image.small_url}>
              </img>
                
            </Link>
            <aside className="hover-info col-sm-12 col-xs-12">
              <div className="product-btns">
                <a><span className="glyphicon glyphicon-shopping-cart"></span></a>
                <a><span className="glyphicon glyphicon-heart"></span></a>
              </div>
            </aside>
          </div>

          <div className="text-center col-sm-12 col-xs-12 product-text-info">
            <div className="caption-info text-truncate" title={productName}>
                  {productName}
            </div>
            ${ this.props.product.master.price }
          </div>


        </div>
      </div>
    );
  }
}

export default ProductTile;
