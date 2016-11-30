import React, { Component } from 'react';
import ProductTile from './product-tile';
import InfiniteScroll from 'redux-infinite-scroll';

class ProductList extends Component {
  constructor(props){
    super(props);
    this.state = {
      loadingMore: false,
      page_no: 1,
      hasMore: true
    }
  }
  _loadMore(){
    this.setState({
      loadingMore: true
    })
    setTimeout(function () {
      this.props.loadMore(this.state.page_no + 1);
      this.setState({
        loadingMore: false,
        hasMore: false,
        page_no: (this.state.page_no + 1)
      });
    }.bind(this), 5000);
  }
  render() {
    let productList;
    productList = this.props.productList.map((product, idx) => {
      return (
        <ProductTile key={product.id} product={product} />
      )
    });

    return (
      <div className="product-list row">
        <InfiniteScroll loadingMore={this.state.loadingMore}
                        loadMore={this._loadMore.bind(this)}
                        hasMore={this.state.hasMore}>
          {productList}
        </InfiniteScroll>
      </div>
    );
  }
}

export default ProductList;
