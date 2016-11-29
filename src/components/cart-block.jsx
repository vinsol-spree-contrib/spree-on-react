import React, { Component } from 'react';

class cartBlock extends Component {
  render() {
    return (
      <dd className="icon-block cart-icon-block withbg">
        <span className="badge">4</span>
        <span className="glyphicon glyphicon-shopping-cart"></span>
      </dd>
    );
  }
}

export default cartBlock;
