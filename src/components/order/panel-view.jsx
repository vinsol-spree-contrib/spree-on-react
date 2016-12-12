import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import Shipment from './shipment';

class OrderPanelView extends Component {
  render() {
    let thisOrder = this.props.order;
    let shipmentsMarkup = thisOrder.shipments.map((shipment, idx) => {
      return (
        <Shipment key={ idx }
                  shipment={ shipment }
                  address={ thisOrder.ship_address }
                  orderLineItems={ thisOrder.line_items } />
      );
    });

    return (
      <div className="order-panel-view row">
        <div className="col-md-12">
          <Panel header={ this._panelHeaderMarkup() }>
            { shipmentsMarkup }
          </Panel>
        </div>
      </div>
    );
  };

  _panelHeaderMarkup() {
    let thisOrder = this.props.order;

    return (
      <div className="order-panel-header">
        <div className="row">
          <div className="col-md-2">
            <label>{ thisOrder.shipments.length } Package(s) &nbsp;</label>
          </div>

          <div className="col-md-2">
            <label>State: &nbsp;</label>
            { thisOrder.state }
          </div>

          <div className="col-md-2">
            <label>Total: &nbsp;</label>
            { thisOrder.display_total }
          </div>

          <div className="col-md-3 pull-right">
            <label>Ref: &nbsp;</label>
            { thisOrder.number }
          </div>

        </div>
      </div>
    );
  }
};

export default OrderPanelView;
