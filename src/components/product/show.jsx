import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

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
    let product = ProductModel.findBySlug(productId, this.props.products);

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
    let product = ProductModel.findBySlug(productId, nextProps.products);

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
      let addToCartButtonNode = <Button className="button-primary button-full" onClick={this.addProductToCart.bind(this)}>
        <span className="cart-text">
          <FormattedMessage
            id="label.addToCart"
            defaultMessage="Add to Cart"
          />
        </span>
        <span className="cart-icon glyphicon glyphicon-shopping-cart"></span>
      </Button>;

      if (isLineItemInCart) {
        addToCartButtonNode = <Link to={ APP_ROUTES.cartPageRoute }>
          <Button className="button-primary button-full">
            <span className="cart-text">
              <FormattedMessage
                id="label.goToCart"
                defaultMessage="Go to Cart"
              />
            </span>
            <span className="cart-icon glyphicon glyphicon-shopping-cart"></span>
          </Button>
        </Link>
      }

      renderString =  <div className="container">
                        <article className="row product-row">
                          <div className="col-sm-6 product-top-col product-image-block">
                            <ImageViewer productVariant={ currentVariant }/>
                          </div>

                          <div className="col-sm-6 product-top-col product-options-block">
                            <div className="product-option-row">
                              <h1 className="product-name">
                                { currentVariant.name }
                              </h1>
                            </div>

                            <div className="product-option-row product-price">
                              ${ currentVariant.price }
                            </div>

                            <div className="product-option-row variant-block">
                              <VariantsList currentVariant={ currentVariant }
                                            variantsList={ this.state.currentProduct.variants }
                                            onChangeVariant={ this.onChangeVariant }/>
                            </div>

                            <div className="product-option-row button-row">
                              { addToCartButtonNode }
                            </div>
                          </div>
                        </article>

                        <article className="product-achievement-row product-desription-section">
                          <div className="achievement-col product-description-block">
                            <h3 className="section-heading">
                              <FormattedMessage
                                id="shared.attributes.description"
                                defaultMessage="Description"
                              />
                            </h3>
                            <div className="product-description-content">
                              { currentVariant.description }
                            </div>
                          </div>

                          <div className="achievement-col product-properties-block">
                            <h3 className="section-heading">
                              <FormattedMessage
                                id="shared.models.productProperties"
                                defaultMessage="Product Properties"
                              />
                            </h3>
                            <div className="product-description-content">
                              <ProductProperties properties={ this.state.currentProduct.product_properties || [] } />
                            </div>
                          </div>

                        </article>

                      </div>;

    }
    return (
      <Layout>
        <div className="product-show product-details-section">
          <Loader displayLoader={ this.props.displayLoader } />
          { renderString }
        </div>
      </Layout>
    );
  };
};

export default ProductShow;
