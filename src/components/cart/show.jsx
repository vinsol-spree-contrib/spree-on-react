import React, { Component } from 'react';
import Layout from '../layout';

import { Table } from 'react-bootstrap';
import { Link } from 'react-router';

class CartShow extends Component {
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
              { lineItem.quantity }
            </td>

            <td>
              { lineItem.display_amount }
            </td>

            <td>
              { lineItem.display_amount }
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
