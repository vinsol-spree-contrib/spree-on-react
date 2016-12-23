import React, { Component } from 'react';
import InfiniteScroll from 'redux-infinite-scroll';

class InfiniteScroller extends Component {
  constructor(props){
    super(props);
    this.state = {
      loadingMore: false
    }
  };

  loadMore () {
    this.setState({
      loadingMore: true
    });

    this.props.loadMore().then(() => {
      this.setState({ loadingMore: false });
    });
  };

  render () {
    return (  <InfiniteScroll loadingMore={ this.state.loadingMore }
                              loadMore={ this.loadMore.bind(this) }
                              elementIsScrollable={ false }
                              hasMore={ this.props.pageCount > this.props.currentPage }>

                { this.props.children }
              </InfiniteScroll>
          );
  };
};

export default InfiniteScroller;
