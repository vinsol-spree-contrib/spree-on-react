import React, { Component } from 'react';
import Layout from '../layout';

class CartShow extends Component {
  render() {
    let lineItems = this.props.order.line_items;
    let renderString = 'Wanna pay for just nothing? We are intrigued.';

    if (lineItems.length > 0) {
      let lineItemList = lineItems.map((lineItem, idx) => {
        return (
          <tr className="line-item" key={`line-item-${idx}`}>
            <td>
              { lineItem.variant.name }
            </td>
          </tr>
        );
      });

      renderString = 
        <div className="row">
          <div className="col-md-12">
            <table>
              <thead>
                <tr>
                  <th> Name </th>
                </tr>
              </thead>

              <tbody>
                { lineItemList }
              </tbody>
            </table>
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
