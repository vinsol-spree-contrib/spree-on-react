import React, { Component } from 'react';

import Address from './address';
import LineItem from './line-item';

class Shipment extends Component {
  render() {
    let thisShipment = this.props.shipment;

    return (
      <div className="shipment-view row">
        <div className="col-md-8">
          <div className="shipment-header">
            <div className="shipment-heading">
              <strong>{ this._shipmentStateMarkup() }</strong>
              <p className="label-block-row">
                <label className="label label-normal">Shipping Method: { thisShipment.selected_shipping_rate.name }</label>
                <label className="label label-normal">Shipping Charges: { thisShipment.selected_shipping_rate.display_cost }</label>
                <label className="label label-default">Ref: { thisShipment.number }</label>
              </p>
            </div>
          </div>

          <div className="shipment-line-items">
            { this._shipmentLineItemsMarkup() }
          </div>
        </div>

        <div className="col-md-4">
          <label>Shipping Address: &nbsp;</label>
          <Address address={ this.props.address } />
        </div>

        <div className="col-md-12 text-right order-total-row">
          <div className="heading">
            <small>Order Total:</small> { this.props.order.display_total }
          </div>
        </div>
      </div>
    );
  };

  _isShipped() {
    return( this.props.shipment.state === "shipped" );
  };

  _shipmentStateMarkup() {
    let thisShipment = this.props.shipment;

    if (this._isShipped()) {
      return (
        `Shipped ${ thisShipment.shipped_at }`
      );
    }
    else {
      if (thisShipment.state === "pending") {
        return (
          `Shipment under Review`
        );
      }
      else if (thisShipment.state === "ready") {
        return (
          `Dispatching soon`
        );
      }

      else if (thisShipment.state === "canceled") {
        return (
          `Shipment Cancelled`
        );
      }

    }
  };

  _shipmentLineItemsMarkup() {
    let thisShipment = this.props.shipment;

    let shipmentLineItems = this.props.orderLineItems.filter((lineItem) => {
      return (lineItem.variant_id !== thisShipment.manifest.variant_id);
    });

    return shipmentLineItems.map((lineItem, idx) => {
      return <LineItem lineItem={ lineItem } key={ idx } />
    });
  };
};

export default Shipment;
