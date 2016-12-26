import React, { Component } from 'react';
import ProductTile from './product-tile';
import InfiniteScroller from './shared/infinite-scroller';
import APP_DEFAULTS from '../constants/app-defaults';

class ProductList extends Component {
  constructor(props){
    super(props);
    this.currentPage = 1;
  };

  loadMoreProducts(){
    return this.props.loadMoreProducts(this.currentPage + 1);
  };

  componentWillReceiveProps(nextProps) {
    this.currentPage = Math.ceil(nextProps.products.length / APP_DEFAULTS.perPage);
  };

  render() {
    let infiniteScroller = null;
    let productList = this.props.products.map((product, idx) => {
      return ( <ProductTile key={ product.id } product={ product } /> );
    });

    if (this.props.products.length > 0) {
      infiniteScroller = <InfiniteScroller loadMore={ this.loadMoreProducts.bind(this) }
                                            pageCount={ this.props.pageCount }
                                            currentPage={ this.currentPage }>
                                          { productList }
                          </InfiniteScroller>;
    }

    return (
      <article className="product-list-container row no-margin">
        <div className="product-list container">
          { infiniteScroller }
        </div>
      </article>
    );
  }
}

export default ProductList;
