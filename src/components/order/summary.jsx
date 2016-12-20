import React, { Component } from 'react';
import { Panel, Table } from 'react-bootstrap';

// TODO: Should use CheckoutStepCalculator instead of this.
import CHECKOUTSTEPS from '../../constants/checkout-steps';

class OrderSummary extends Component {

  mapPropertiesToTable () {
    let orderPropertiesMapper = this.getOrderPropertiesMapper();
    return orderPropertiesMapper.map((property, idx) => {
      return (
        <tr key={`order-prop-${ idx }`}>
          <td>
            <label>
              { property[0] }
            </label>
          </td>
          <td>
            { property[1] }
          </td>
        </tr>
      )
    });
  }

  getOrderPropertiesMapper () {
    let thisOrder = this.props.order;
    let orderPropertiesMapper = [];
    if(CHECKOUTSTEPS.indexOf(this.props.currentCheckoutStep) >= 0 ) {
      orderPropertiesMapper.push(
        ['Item Total:', thisOrder.display_item_total],
        ['Adjustment Total:', thisOrder.display_tax_total]
      );
    };
    if(CHECKOUTSTEPS.indexOf(this.props.currentCheckoutStep) >= 2 ) {
      orderPropertiesMapper.push(
        ['Shipping Total:', thisOrder.display_ship_total]
      );
    };
    orderPropertiesMapper.push(
      ['Order Total: $', thisOrder.total]
    );
    return orderPropertiesMapper;
  }

  render() {
    return (
      <div className="row">
        <Panel collapsible defaultExpanded header="Order Summary">
          <Table fill>
            <tbody>
              {this.mapPropertiesToTable()}
            </tbody>
          </Table>
        </Panel>
      </div>
    );
  };

};

export default OrderSummary;
