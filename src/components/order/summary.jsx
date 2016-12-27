import React, { Component } from 'react';
import { Panel, Table } from 'react-bootstrap';

import CheckoutStepCalculator from '../../services/checkout-step-calculator';

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
    let isValidStep = CheckoutStepCalculator.isValidStep(thisOrder.checkout_steps, this.props.currentCheckoutStep);
    if (isValidStep) {
      orderPropertiesMapper.push(
        ['Item Total:', `$${thisOrder.item_total}`],
        ['Adjustment Total:', `$${thisOrder.adjustment_total}`]
      );
    };

    if (thisOrder.checkout_steps.indexOf(this.props.currentCheckoutStep) >= 2 ) {
      orderPropertiesMapper.push(
        ['Shipping Total:', `$${thisOrder.shipment_total}`]
      );
    };
    orderPropertiesMapper.push(
      ['Order Total:', `$${thisOrder.total}`]
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
