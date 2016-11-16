import React, { Component } from 'react';
import ProductTile from './product-tile';

class ProductList extends Component {
  render() {
    let productList;

    productList = this.props.productList.map((product, idx) => {
      return (
        <ProductTile key={product.id} product={product} />
      )
    });

    return (
      <div className="product-list row">
        {productList}
      </div>
    );
  }
}

export default ProductList;
