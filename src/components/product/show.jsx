import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Tabs, Tab} from 'react-bootstrap';

import ProductProperties from './properties';
import ImageViewer from './image-viewer';
import VariantsList from './variants-list';
import Layout from '../layout';

import ProductFinder from '../../services/product-finder';
import Loader from '../shared/loader';

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

  addProductToCart () {
    this.props.addProductToCart(this.state.currentVariant.id, 1);
  };

  render() {
    let renderString = null
    if(this.state.currentVariant)
      renderString =  <div className="row">

                        <div className="col-sm-6 col-xs-12">
                          <ImageViewer productVariant={ this.state.currentVariant }/>
                        </div>

                        <div className="col-sm-6 col-xs-12">
                          <div className="row">
                            <div className="col-md-12">
                              <h1 className="font-dark">
                                Product Title - { this.state.currentVariant.name }
                              </h1>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12">
                              <p className="h3 font-dark">${ this.state.currentVariant.price }</p>

                              <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" className="product-detail-tab">
                                <Tab eventKey={1} title="Details">
                                  <div className="product-desc">Product Description - { this.state.currentVariant.description }</div>
                                </Tab>
                                <Tab eventKey={2} title="Specifications">
                                  <div className="product-desc">
                                    <ProductProperties properties={ this.state.currentProduct.product_properties || [] } />
                                  </div>
                                </Tab>
                              </Tabs>

                              
                              
                            </div>
                          </div>

                          
                          
                          <div className="row">
                            <div className="col-md-12">
                              <Button bsStyle="success" bsSize="large" active onClick={this.addProductToCart.bind(this)}>
                                Add to cart
                              </Button>
                            </div>
                          </div>

                          <div className="row">
                            <VariantsList currentVariant={this.state.currentVariant}
                                          variantsList={this.state.currentProduct.variants}
                                          onChangeVariant={this.onChangeVariant}/>
                          </div>

                        </div>
                      </div>;

    return (
      <Layout>
        <div className="product-show">
          <Loader displayLoader={this.props.displayLoader} />
          {renderString}
        </div>
      </Layout>
    );
  };
};

export default ProductShow;
