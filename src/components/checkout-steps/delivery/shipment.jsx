import React, { Component } from 'react';
import { Field } from 'redux-form';
import { FormattedMessage } from 'react-intl';

import LineItem from '../../order/line-item';

class Shipment extends Component {
  constructor(props) {
    super(props);
    this.renderHiddenFieldForShipmentId = this.renderHiddenFieldForShipmentId.bind(this);
  };

  componentDidMount () {
    this.setShipmentIdInHiddenField(this.props.shipment.id);
  };

  renderHiddenFieldForShipmentId (field) {
    this.onChangeCallbackForShipmentId = field.input.onChange;
    return <input { ...field.input } value={ this.props.shipment.id } type="hidden"/>
  };

  /*
  :DIRTY HACK:
  Redux-form form doesn't support hidden fields. So, we create a hidden field
  and manually trigger its onChange to set the value in redux-form reducer.
  */
  setShipmentIdInHiddenField(value) {
    this.onChangeCallbackForShipmentId(value);
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

  render() {
    let shipment = this.props.shipment;

    let shipmentMarkup = shipment.shipping_rates.map((shippingRate, idx) => {
      let label = `${ shippingRate.name }( ${ shippingRate.display_cost } )`;
      return (
        <div key={ idx } className="checkout-line-item-options">
          <label>
            <Field name={ `${ this.props.fieldNamePrefix }[selected_shipping_rate_id]` }
                  component="input"
                  type="radio"
                  value={ `${shippingRate.id}` } />
            { shippingRate.name }
            ( { shippingRate.display_cost } )
          </label>
        </div>
      );
    });

    return (
      <div className="checkout-delivery-block">
        <div className="checkout-section-title">
          { `Shipment - ${ this.props.shipmentIndex }` }
        </div>
        <p className="checkout-section-message">
          <FormattedMessage
            id="com.shipmentForm.subheading"
            defaultMessage="Please select a shipping method for these Items."
          />
        </p>
        { this._shipmentLineItemsMarkup() }
        <div className="checkout-line-item-options-block">
          { shipmentMarkup }
        </div>

        <Field name={ `${ this.props.fieldNamePrefix }[id]` } component={ this.renderHiddenFieldForShipmentId } />
      </div>
    );
  };
};

export default Shipment;
