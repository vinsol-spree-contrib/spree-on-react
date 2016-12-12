import React, { Component } from 'react';

import Address from './address';
import LineItem from './line-item';

class Shipment extends Component {
  render() {
    let thisShipment = this.props.shipment;

    return (
      <div className="shipment-view row">
        <div className="col-md-12">
          <div className="row shipment-header">
            <div className="col-md-10">
              <h3>
                { this._shipmentStateMarkup() }
              </h3>
            </div>

            <div className="col-md-2">
              <label>Ref: &nbsp;</label>
              { thisShipment.number }
            </div>
          </div>

          <div className="row shipment-content">
            <div className="col-md-8">
              <div className="shipment-details">
                <div className="row">
                  <div className="col-md-12">
                    <label>Shipping Method: &nbsp;</label>
                    { thisShipment.selected_shipping_rate.name }
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <label>Shipping Charges: &nbsp;</label>
                    { thisShipment.selected_shipping_rate.display_cost }
                  </div>
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
