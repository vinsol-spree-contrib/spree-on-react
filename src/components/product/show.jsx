import React, { Component } from 'react';

import ProductImageLarge from './image-large';

import ProductFinder from '../../services/product-finder';

class ProductShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {},
      productId: ''
    }
  };

  componentDidMount() {
    let productId = this.props.routeParams.productId;
    let product = ProductFinder.find(productId, this.props.products);

    /* Set productId in internal state */
    this.setState({
      productId: productId
    });

    if ( product ) {
      this.setState({
        currentProduct: product
      });
    }
    else {
      this.props.fetchProductFromAPI(productId);
    }

  };

  componentWillReceiveProps(nextProps) {
    let productId = this.state.productId;
    let product = ProductFinder.find(productId, nextProps.products);

    if (product) {
      this.setState({ currentProduct: product });
    }
    else {
      this.props.fetchProductFromAPI(productId);
    }
  };

  render() {
    return (
      <div className="product-show row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <ProductImageLarge product={this.state.currentProduct} />
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12">
              <h1>
                Product Title - { this.state.currentProduct.name }
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="well">
                Product Description - { this.state.currentProduct.description }
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              Price
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              ${ this.state.currentProduct.price }
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="btn btn-success">
                Add to cart
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };
};

export default ProductShow;
