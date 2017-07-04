import React, { Component } from 'react';
// import { Panel } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import Shipment from './shipment';

class OrderPanelView extends Component {
  render() {
    let thisOrder = this.props.order;
    let shipmentsMarkup = thisOrder.shipments.map((shipment, idx) => {
      return (
        <Shipment key={ idx }
                  shipment={ shipment }
                  address={ thisOrder.ship_address }
                  orderLineItems={ thisOrder.line_items }
                  order={ this.props.order }/>
      );
    });

    return (
      <div className="confirmation-details-block">
        <div header={ this._panelHeaderMarkup() }>
          { shipmentsMarkup }
        </div>
      </div>
    );
  };

  _panelHeaderMarkup() {
    let thisOrder = this.props.order;
    let paymentStatus = thisOrder.payment_state === 'paid' ? 'success' : 'danger';

    return (
      <div className="order-panel-header row no-margin">
        <div className="label-block-row">
          <label className="label label-default">
          <FormattedMessage
            id="shared.attributes.orderNumber"
            defaultMessage="Ref"
          />
          : { thisOrder.number }</label>
          <label className="label label-normal">{ thisOrder.shipments.length }
            &nbsp;
            <FormattedMessage
              id="label.packages"
              defaultMessage="Package(s)"
            />
          </label>
          <label className="label label-normal">
            <FormattedMessage
              id="label.orderTotal"
              defaultMessage="Order Total"
            />
            : ${ thisOrder.total }</label>
          <span className={ `pull-right label label-${ paymentStatus }` }>
            <FormattedMessage
              id="label.paymentStatus"
              defaultMessage="Payment Status"
            />
            : { thisOrder.payment_state }
          </span>
        </div>
      </div>
    );
  }
};

export default OrderPanelView;
