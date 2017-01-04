import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router';

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

    let renderString = <div className="well">
                          <p className="h4">Your cart is empty. Add some items to proceed.</p>
                          <br/>
                          <Link className='link btn btn-primary btn-lg' to={ APP_ROUTES.homePageRoute }>
                            <span className="glyphicon glyphicon-chevron-left" />
                            &nbsp;Continue Shopping
                          </Link>
                        </div>;

    if (lineItems.length > 0) {
      let lineItemList = lineItems.map((lineItem, idx) => {
        let variantImage = lineItem.variant.images[0].small_url;
        let imageUrl = URLSanitizer.makeAbsolute(variantImage);
        let productSlug = lineItem.variant.slug;

        return (
          <tr className="line-item" key={`line-item-${idx}`}>
            <td>
              <div className="cart-img-block">
                <Link to={`/products/${ productSlug }`}>
                  <img  className="product-image img-responsive"
                        alt='productName'
                        src={ imageUrl }>
                  </img>
                </Link>
              </div>

              <div className="cart-img-des hidden-xs">
                <p><Link to={`/products/${ productSlug }`}>{ lineItem.variant.name }</Link></p>
                <p className="">{ lineItem.variant.description }</p>
              </div>
            </td>

            <td>
              { lineItem.single_display_amount }
            </td>

            <td className="qty-update-block">
              <form onSubmit={this.changeQuantity}>
                <input type='hidden' value={lineItem.id} name='line_item_id' />
                <input type='hidden' value={lineItem.variant_id} name='line_item_variant_id' />
                <input type='number' defaultValue={ lineItem.quantity } name='quantity' className="qty-number"/>
                <span className="visible-xxs"></span>
                <button type='submit' className="btn btn-success">Save</button>
              </form>
            </td>

            <td className="text-right">
              { lineItem.display_amount }
            </td>

            <td className="text-right">
              <a className='btn btn-danger btn-sm' onClick={() => this.destroyLineItem(lineItems.length, lineItem)}><span className="glyphicon glyphicon-trash"></span></a>
            </td>
          </tr>
        );
      });

      renderString =
        <div className="row">
          <div className="col-md-12">
            <Table striped hover className="cart-table">
              <thead>
                <tr>
                  <th> Product </th>
                  <th> Price </th>
                  <th> Qty </th>
                  <th className="text-right"> Total </th>
                  <th className="text-right"> Actions </th>
                </tr>
              </thead>

              <tbody>
                { lineItemList }
              </tbody>
            </Table>

            <div className="text-right cart-empty-update-row">
              <a className='link btn btn-empty btn-default pull-left' onClick={this.emptyCart}>Empty Cart</a>
              <Link className='link btn btn-primary btn-lg' to={ APP_ROUTES.homePageRoute }>
                <span className="glyphicon glyphicon-chevron-left" />
                &nbsp;Continue Shopping
              </Link>
              <a className='btn btn-success btn-lg' onClick={this.doCheckout}>Place Order</a>
            </div>
          </div>
        </div>;
    }

    return (
      <Layout>
        <div className="big-box-heading secondary spacing">
          Shopping Cart
          <small className="show">NEED HELP? Call xxxx-xxxx-xxxx <strong></strong></small>
        </div>
        {renderString}
      </Layout>
    );
  };
};

export default CartShow;
