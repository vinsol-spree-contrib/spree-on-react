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
      <article className="product-list-container row no-margin">
        <div className="product-list container">
          {productList}
        </div>
      </article>
    );
  }
}

export default ProductList;
