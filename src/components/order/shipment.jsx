import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

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
                <label className="label label-normal">
                  <FormattedMessage
                    id="shared.models.shippingMethod"
                    defaultMessage="Shipping Method"
                  />
                  : { thisShipment.selected_shipping_rate.name }
                </label>
                <label className="label label-normal">
                  <FormattedMessage
                    id="shared.attributes.shippingCharges"
                    defaultMessage="Shipping Charges"
                  />
                  : { thisShipment.selected_shipping_rate.display_cost }
                </label>
                <label className="label label-default">
                  <FormattedMessage
                    id="shared.attributes.shipmentNumber"
                    defaultMessage="Ref"
                  />
                  : { thisShipment.number }
                </label>
              </p>
            </div>
          </div>

          <div className="shipment-line-items">
            { this._shipmentLineItemsMarkup() }
          </div>
        </div>

        <div className="col-md-4">
          <label>
            <FormattedMessage
              id="label.shippingAddress"
              defaultMessage="Shipping Address"
            />
            : &nbsp;
          </label>
          <Address address={ this.props.address } />
        </div>

        <div className="col-md-12 text-right order-total-row">
          <div className="heading">
            <small>
              <FormattedMessage
                id="label.orderTotal"
                defaultMessage="Order Total"
              />
            :</small>
            ${ this.props.order.total }
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
        <div>
          <FormattedMessage
            id="label.shipmentState.shipped"
            defaultMessage="Shipped"
          />
          { thisShipment.shipped_at }
        </div>
      );
    }
    else {
      if (thisShipment.state === "pending") {
        return (
          <FormattedMessage
            id="label.shipmentState.pending"
            defaultMessage="Shipment under Review"
          />
        );
      }
      else if (thisShipment.state === "ready") {
        return (
          <FormattedMessage
            id="label.shipmentState.ready"
            defaultMessage="Dispatching soon"
          />
        );
      }

      else if (thisShipment.state === "canceled") {
        return (
          <FormattedMessage
            id="label.shipmentState.canceled"
            defaultMessage="Shipment Canceled"
          />
        );
      }

    }
  };

  _shipmentLineItemsMarkup() {
    let thisShipment = this.props.shipment;

    let shipmentLineItems = this.props.orderLineItems.filter((lineItem) => {
      return thisShipment.line_item_ids.indexOf(lineItem.id) !== -1;
    });

    return shipmentLineItems.map((lineItem, idx) => {
      return <LineItem lineItem={ lineItem } key={ idx } />
    });
  };
};

export default Shipment;
