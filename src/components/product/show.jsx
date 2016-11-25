import React, { Component } from 'react';

import ProductProperties from './properties';
import ImageViewer from './image-viewer';
import VariantsList from './variants-list';

import ProductFinder from '../../services/product-finder';
import Loader from '../loader';

class ProductShow extends Component {
  constructor(props) {
    super(props);
    this.onChangeVariant = this.onChangeVariant.bind(this)
    this.state = {
      currentProduct: {},
      productId: '',
      currentVariant: null
    }
  };

  onChangeVariant(variant){
    this.setState({currentVariant: variant})
  }

  componentDidMount() {
    let productId = this.props.routeParams.productId;
    let product = ProductFinder.find(productId, this.props.products);

    /* Set productId in internal state */
    this.setState({
      productId: productId
    });

    if ( product ) {
      this.setState({
        currentProduct: product,
        currentVariant: (product.variants[0] || product.master)
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
      this.setState({
        currentProduct: product,
        currentVariant: (product.variants[0] || product.master)
      });    }
    else {
      this.props.fetchProductFromAPI(productId);
    }
  };


  render() {
    let renderString = null
    if(this.state.currentVariant)
      renderString =  <div className="row">

                        <div className="col-md-4">

                          <ImageViewer productVariant={ this.state.currentVariant }/>
                          <div className="row">
                            <div className="col-md-12">
                              <ProductProperties properties={ this.state.currentProduct.product_properties || [] } />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-md-12">
                              <h1>
                                Product Title - { this.state.currentVariant.name }
                              </h1>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12">
                              <div className="well">
                                Product Description - { this.state.currentVariant.description }
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
                              ${ this.state.currentVariant.price }
                            </div>
                          </div>

                          <div className="row">
                            <VariantsList currentVariant={this.state.currentVariant}
                                          variantsList={this.state.currentProduct.variants}
                                          onChangeVariant={this.onChangeVariant}/>
                          </div>

                          <div className="row">
                            <div className="col-md-12">
                              <div className="btn btn-success pull-right">
                                Add to cart
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
    return (
      <div className="product-show row">
        <Loader displayLoader={this.props.displayLoader} />
        {renderString}
      </div>
    );
  };
};

export default ProductShow;
