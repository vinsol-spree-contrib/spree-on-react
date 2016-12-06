import React, { Component } from 'react';
import ProductTile from './product-tile';
import InfiniteScroll from 'redux-infinite-scroll';

class ProductList extends Component {
  constructor(props){
    super(props);
    this.state = {
      loadingMore: false
    }
  }
  _loadMore(){
    this.setState({
      loadingMore: true
    })

    setTimeout(function () {
      this.props.loadMore(this.props.currentPage + 1);
      this.setState({
        loadingMore: false
      });
    }.bind(this), 1000);
  }
  render() {
    let productList = this.props.productList.map((product, idx) => {
      return (
        <ProductTile key={product.id} product={product} />
      )
    });
    let infiniteScroller = null;
    if(this.props.productList.length > 0){
        infiniteScroller = <InfiniteScroll loadingMore={this.state.loadingMore}
                        loadMore={this._loadMore.bind(this)}
                        elementIsScrollable={ false }
                        hasMore={this.props.pageCount > this.props.currentPage}>
          {productList}
        </InfiniteScroll>;
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
