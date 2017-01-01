import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

import ProductProperties from './properties';
import ImageViewer from './image-viewer';
import VariantsList from './variants-list';
import Layout from '../layout';
import APP_ROUTES from '../../constants/app-routes';
import ProductModel from '../../services/product-model';
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
    let product = ProductModel.find(productId, this.props.products);

    /* Set productId in internal state */
    this.setState({
      productId: productId
    });

    if (product) {
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
    let product = ProductModel.find(productId, nextProps.products);

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
    let { currentVariant } = this.state
    if(currentVariant) {
      let isLineItemInCart = this.props.lineItems.find((lineItem) => { return (lineItem.variant_id === currentVariant.id) })
      let addToCartButtonNode = <Button className="cart-big-btn sm-full-btn" bsSize="large" active onClick={this.addProductToCart.bind(this)}>
        <span className="cart-text">Add to cart</span>
        <span className="cart-icon glyphicon glyphicon-shopping-cart"></span>
      </Button>;

      if (isLineItemInCart) {
        addToCartButtonNode = <Link to={ APP_ROUTES.cartPageRoute }>
          <Button className="cart-big-btn sm-full-btn" bsSize="large" active>
            <span className="cart-text">Go to cart</span>
            <span className="cart-icon glyphicon glyphicon-shopping-cart"></span>
          </Button>
        </Link>
      }

      renderString =  <div className="">
                        <article className="row product-row">
                          <div className="col-sm-6 col-xs-12 product-top-col">
                            <ImageViewer productVariant={ currentVariant }/>
                            <div className="row">
                              <div className="col-md-8 col-md-offset-4">
                                { addToCartButtonNode }
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-6 col-xs-12 product-top-col text-left">
                            <div className="row">
                              <div className="col-md-12">
                                <h1 className="font-dark">
                                  { currentVariant.name }
                                </h1>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-12">
                                <p className="h3 font-dark">${ currentVariant.price }</p>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-12">
                                <p className="h3 font-dark">Description</p>
                                <p className="pull-left">{ currentVariant.description }</p>
                              </div>
                            </div>

                            <div className="row">
                              <VariantsList currentVariant={ currentVariant }
                                            variantsList={ this.state.currentProduct.variants }
                                            onChangeVariant={ this.onChangeVariant }/>
                            </div>
                          </div>
                        </article>

                        <article className="row product-achievement-row">
                          <div className="col-sm-6 col-xs-12 achievement-col">
                            <div>
                              <h3 className="font-dark">Product Details</h3>
                              { currentVariant.description }
                            </div>
                          </div>
                          <div className="col-sm-6 col-xs-12 achievement-col">
                            <div className="col-md-12">
                              <h3 className="font-dark">Properties</h3>
                              <div className="product-desc">
                                <ProductProperties properties={ this.state.currentProduct.product_properties || [] } />
                              </div>
                              </div>
                          </div>

                        </article>

                      </div>;

    }
    return (
      <Layout>
        <div className="product-show">
          <Loader displayLoader={ this.props.displayLoader } />
          { renderString }
        </div>
      </Layout>
    );
  };
};

export default ProductShow;
