import React, { Component } from 'react';
import Layout from '../layout';

import { Table } from 'react-bootstrap';
import { Link } from 'react-router';

class CartShow extends Component {

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
    let lineItems = this.props.order.line_items;
    let renderString = 'Wanna pay for just nothing? We are intrigued.';

    if (lineItems.length > 0) {
      let lineItemList = lineItems.map((lineItem, idx) => {
        let variantImage = lineItem.variant.images[0].small_url;
        let productId = lineItem.variant.product_id;

        return (
          <tr className="line-item" key={`line-item-${idx}`}>
            <td>
              <div className="cart-img-block">
                <Link to={`/products/${ productId }`}>
                  <img  className="product-image img-responsive"
                        alt={'productName'}
                        src={ process.env.REACT_APP_API_HOST + variantImage }>
                  </img>
                </Link>
              </div>

              <div className="cart-img-des hidden-xs">
                <p><Link to={`/products/${ productId }`}>{ lineItem.variant.name }</Link></p>
                <p className="">{ lineItem.variant.description }</p>
              </div>
            </td>

            <td>
              { lineItem.single_display_amount }
            </td>

            <td className="qty-update-block">
              <form onSubmit={this.changeQuantity.bind(this)}>
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
              <a className='link btn btn-empty' onClick={this.emptyCart.bind(this)}>Empty Cart</a>
              <a className='btn btn-success btn-lg' onClick={this.doCheckout.bind(this)}>Checkout</a>
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
