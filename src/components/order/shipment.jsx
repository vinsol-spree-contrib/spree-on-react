import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Address from './address';
import LineItem from './line-item';

class Shipment extends Component {
  render() {
    let thisShipment = this.props.shipment;

    return (
      <div className="shipment-view">
        <div className="row">
          <div className="col-sm-8">
            <div className="shipment-header order-block-header">
              <div className="order-header-title">
                <strong>{ this._shipmentStateMarkup() }</strong>
              </div>
              <div className="order-header-labels">
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
              </div>
            </div>

            <div className="shipment-line-items order-line-items">
              { this._shipmentLineItemsMarkup() }
            </div>
          </div>

          <div className="col-sm-3 col-sm-offset-1">
            <div className="order-address-block">
              <label>
                <FormattedMessage
                  id="label.shippingAddress"
                  defaultMessage="Shipping Address"
                />
                : &nbsp;
              </label>
              <Address address={ this.props.address } />
            </div>
          </div>
        </div>

        <div className="checkout-shipment-order-total order-total-row">
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
