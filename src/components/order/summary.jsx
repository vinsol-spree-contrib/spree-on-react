import React, { Component } from 'react';
import { Panel, Table } from 'react-bootstrap';
import { FormattedMessage, injectIntl } from 'react-intl';

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
    const ItemTotalRep = <FormattedMessage
                            id="label.itemTotal"
                            defaultMessage="Item Total"
                          />;
    const adjustmentTotalRep = <FormattedMessage
                                  id="label.adjustmentTotal"
                                  defaultMessage="Adjustment Total"
                                />;
    const shippingTotalRep = <FormattedMessage
                                id="label.shippingTotal"
                                defaultMessage="Shipping Total"
                              />;
    const orderTotalRep = <FormattedMessage
                            id="label.orderTotal"
                            defaultMessage="Order Total"
                          />

    if (this.props.placedOrder && this.props.placedOrder.id) {
      thisOrder = this.props.placedOrder;
    }

    let orderPropertiesMapper = [];
    let isValidStep = CheckoutStepCalculator.isValidStep(thisOrder.checkout_steps, this.props.currentCheckoutStep);
    // debugger
    if (isValidStep) {
      orderPropertiesMapper.push(
        [ItemTotalRep, `$${thisOrder.item_total}`],
        [adjustmentTotalRep, `$${thisOrder.adjustment_total}`]
      );
    };

    if (thisOrder.checkout_steps.indexOf(this.props.currentCheckoutStep) >= 2 ) {
      orderPropertiesMapper.push(
        [shippingTotalRep, `$${thisOrder.shipment_total}`]
      );
    };
    orderPropertiesMapper.push(
      [orderTotalRep, `$${thisOrder.total}`]
    );
    return orderPropertiesMapper;
  }

  render() {
    return (
      <div className="checkout-order-details">
        <Panel collapsible defaultExpanded
                header={ this.props.intl.formatMessage({ id: 'com.order.summaryHeader', defaultMessage: "Order Summary" }) }>
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

export default injectIntl(OrderSummary);
