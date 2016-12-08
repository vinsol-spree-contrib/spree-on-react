import React, { Component } from 'react';
import Layout from '../layout';

import { Table } from 'react-bootstrap';
import { Link } from 'react-router';

class CartShow extends Component {

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
              <div className="row">
                <div className="col-md-2">
                  <Link to={`/products/${ productId }`}>
                    <img  className="product-image"
                          alt={'productName'}
                          src={ process.env.REACT_APP_API_HOST + variantImage }>
                    </img>
                  </Link>
                </div>

                <div className="col-md-10">
                  <div className="row">
                    <div className="col-md-12">
                      <Link to={`/products/${ productId }`}>
                        <h4>
                          { lineItem.variant.name }
                        </h4>
                      </Link>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <p>
                        { lineItem.variant.description }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </td>

            <td>
              { lineItem.single_display_amount }
            </td>

            <td>
              <form onSubmit={this.changeQuantity.bind(this)}>
                <input type='hidden' value={lineItem.id} name='line_item_id' />
                <input type='hidden' value={lineItem.variant_id} name='line_item_variant_id' />
                <input type='number' defaultValue={ lineItem.quantity } name='quantity' />
                <button type='submit'>Save</button>
              </form>
            </td>

            <td>
              { lineItem.display_amount }
            </td>

            <td>
              <a className='link' onClick={() => this.destroyLineItem(lineItems.length, lineItem)}> x </a>
            </td>
          </tr>
        );
      });

      renderString =
        <div className="row">
          <div className="col-md-12">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th> Product </th>
                  <th> Price </th>
                  <th> Quantity </th>
                  <th> Total </th>
                  <th> Actions </th>
                </tr>
              </thead>

              <tbody>
                { lineItemList }
              </tbody>
            </Table>
            <a className='link' onClick={this.emptyCart.bind(this)}>Empty Cart</a>
          </div>
        </div>;
    }

    return (
      <Layout>
        <h1>
          Shopping Cart
        </h1>
        {renderString}
      </Layout>
    );
  }
}

export default CartShow;
