import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import Layout from '../layout';
import URLSanitizer from '../../services/url-sanitizer';
import APP_ROUTES from '../../constants/app-routes';

class CartShow extends Component {

  constructor(props) {
    super(props);
    this.destroyLineItem = this.destroyLineItem.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.doCheckout = this.doCheckout.bind(this);
  };

  componentDidMount() {
    this.props.setCurrentCheckoutStep();
  };

  destroyLineItem(lineItemCount, lineItem) {
    if (lineItemCount > 1) {
      this.props.destroyLineItem(lineItem);
    } else{
      this.props.emptyCart(this.props.order);
    };
  };

  emptyCart () {
    this.props.emptyCart(this.props.order);
  };

  changeQuantity(event) {
    event.preventDefault();
    this.props.changeQuantity(event.target.line_item_id.value, event.target.quantity.value);
  };

  doCheckout () {
    this.props.doCheckout(this.props.order);
  };

  render() {
    let lineItems = [];
    if (this.props.order.state !== 'complete') {
      lineItems = this.props.order.line_items;
    }

    let renderString = <div className="cart-empty-block">
                          <p className="h4">
                            <FormattedMessage
                              id="com.cart--show.cartEmptyHeading"
                              defaultMessage="Your cart is empty. Add some items to proceed."
                            />
                          </p>
                          <br/>
                          <Link className='button-primary button-white' to={ APP_ROUTES.homePageRoute }>
                            <span className="glyphicon glyphicon-chevron-left" />
                            &nbsp;
                            <FormattedMessage
                              id="com.cart--show.continueShopping"
                              defaultMessage="Continue Shopping"
                            />
                          </Link>
                        </div>;

    if (lineItems.length > 0) {
      let lineItemList = lineItems.map((lineItem, idx) => {
        let variantImage = lineItem.variant.images[0].small_url;
        let imageUrl = URLSanitizer.makeAbsolute(variantImage);
        let productSlug = lineItem.variant.slug;

        return (
          <tr className="line-item" key={`line-item-${idx}`}>
            <td className="cart-item-image-col">
              <div className="row">
                <div className="col-sm-2 cart-img-block">
                  <Link to={`/products/${ productSlug }`} className="cart-image-link">
                    <img  className="cart-image"
                          alt='productName'
                          src={ imageUrl }>
                    </img>
                  </Link>
                </div>

                <div className="col-sm-10 cart-item-details hidden-xs">
                  <h4 className="cart-item-title"><Link to={`/products/${ productSlug }`}>{ lineItem.variant.name }</Link></h4>
                  <p className="cart-item-description">{ lineItem.variant.description }</p>
                </div>
              </div>
            </td>

            <td className="cart-item-price-col">
              { lineItem.single_display_amount }
            </td>

            <td className="qty-update-block cart-item-qty-col">
              <form onSubmit={this.changeQuantity}>
                <input type='hidden' value={lineItem.id} name='line_item_id' />
                <input type='hidden' value={lineItem.variant_id} name='line_item_variant_id' />
                <input type='number' defaultValue={ lineItem.quantity } name='quantity' className="qty-number cart-item-qty-input"/>
                <span className="visible-xxs"></span>
                <button type='submit' className="cart-item-save-btn button-primary button-small">
                  <FormattedMessage
                    id="label.buttons.save"
                    defaultMessage="Save"
                  />
                </button>
              </form>
            </td>

            <td className="text-right cart-item-total-col">
              { lineItem.display_amount }
            </td>

            <td className="text-right">
              <a className='button-primary button-red' onClick={() => this.destroyLineItem(lineItems.length, lineItem)}><span className="glyphicon glyphicon-trash"></span></a>
            </td>
          </tr>
        );
      });

      renderString =
        <div className="cart-items-section">
          <table className="cart-table cart-items-table">
            <thead>
              <tr>
                <th>
                  <FormattedMessage
                    id="com.cart--show.tableHeading.product"
                    defaultMessage="Product"
                  />
                </th>
                <th>
                  <FormattedMessage
                    id="com.cart--show.tableHeading.price"
                    defaultMessage="Price"
                  />
                </th>
                <th>
                  <FormattedMessage
                    id="com.cart--show.tableHeading.qty"
                    defaultMessage="Qty"
                  />
                </th>
                <th className="text-right cart-item-total-col">
                  <FormattedMessage
                    id="com.cart--show.tableHeading.total"
                    defaultMessage="Total"
                  />
                </th>
                <th className="text-right">
                  <FormattedMessage
                    id="com.cart--show.tableHeading.actions"
                    defaultMessage="Actions"
                  />
                </th>
              </tr>
            </thead>

            <tbody>
              { lineItemList }
            </tbody>
          </table>

          <div className="cart-buttons-row">
            <div className="row">
              <div className="col-sm-8">
                <a className='button-primary button-green' onClick={this.emptyCart}>
                  <FormattedMessage
                    id="label.buttons.emptyCart"
                    defaultMessage="Empty Cart"
                  />
                </a>
                <Link className='button-primary button-white' to={ APP_ROUTES.homePageRoute }>
                  <span className="glyphicon glyphicon-chevron-left" />
                  &nbsp;
                  <FormattedMessage
                    id="com.cart--show.continueShopping"
                    defaultMessage="Continue Shopping"
                  />
                </Link>
              </div>
              <div className="col-sm-4 text-right">
                <a className='button-primary' onClick={this.doCheckout}>
                  <FormattedMessage
                    id="label.buttons.placeOrder"
                    defaultMessage="Place Order"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>;
    }

    return (
      <Layout>
        <div className="cart-section">
          <div className="container">
            <div className="section-heading">
              <FormattedMessage
                id="com.cart--show.header"
                defaultMessage="Shopping Cart"
              />
              <small className="cart-contact-block">
                <FormattedMessage
                  id="com.cart--show.helpMessage"
                  defaultMessage="NEED HELP? Call xxxx-xxxx-xxxx"
                />
              </small>
            </div>
            {renderString}
          </div>
        </div>
      </Layout>
    );
  };
};

export default CartShow;
