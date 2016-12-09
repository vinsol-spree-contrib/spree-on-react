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
      renderString =  <div className="">
                        <article className="row product-row">
                          <div className="col-sm-6 col-xs-12 product-top-col">
                            <ImageViewer productVariant={ this.state.currentVariant }/>
                          </div>

                          <div className="col-sm-6 col-xs-12 product-top-col text-center">
                            <div className="row">
                              <div className="col-md-12">
                                <h1 className="font-dark">
                                  Product Title - { this.state.currentVariant.name }
                                </h1>
                                <div className="color-row">
                                  <span className="badge pink"></span>
                                  <span className="badge blue"></span>
                                  <span className="badge green"></span>
                                  <span className="badge pruple"></span>
                                  <span className="badge black"></span>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-12">
                               <p className="h3 font-dark">${ this.state.currentVariant.price }</p>
                                <Button className="cart-big-btn sm-full-btn" bsSize="large" active onClick={this.addProductToCart.bind(this)}>
                                  <span className="cart-text">Add to cart</span>
                                  <span className="cart-icon glyphicon glyphicon-shopping-cart"></span>
                                </Button>
                              </div>
                            </div>
                            
                            <div className="row">
                              <VariantsList currentVariant={this.state.currentVariant}
                                            variantsList={this.state.currentProduct.variants}
                                            onChangeVariant={this.onChangeVariant}/>
                            </div>
                          </div>
                        </article>

                        <article className="row product-achievement-row">
                          <div className="col-sm-6 col-xs-12 achievement-col">
                            <div>
                              <h3 className="font-dark">100% Satisfaction Guaranteed</h3>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                          </div>
                          <div className="col-sm-6 col-xs-12 achievement-col">
                            <div>
                              <h3 className="font-dark">Gold Recipient of the Mom’s Choice Awards</h3>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                              </div>
                          </div>

                        </article>

                        <article className="row product-detail-section">
                          <div className="container">
                            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" className="product-detail-tab">
                              <Tab eventKey={1} title="Details">
                                <div className="product-desc">
                                  <div className="block-title">Product Description</div>
                                  { this.state.currentVariant.description }</div>
                              </Tab>
                              <Tab eventKey={2} title="Specifications">
                                <div className="product-desc">
                                  <ProductProperties properties={ this.state.currentProduct.product_properties || [] } />
                                </div>
                              </Tab>
                            </Tabs>
                          </div>
                        </article>
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
