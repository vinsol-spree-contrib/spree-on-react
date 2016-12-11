import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';

class Shipment extends Component {

  render() {
    let shipment = this.props.shipment;

    let shipmentMarkup = shipment.shipping_rates.map((shippingRate, idx) => {
      return (
        <div key={ idx }>
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
      <div className="row">
        <div className="col-md-12">
          <h2>
            { `Shipment - ${ this.props.shipmentIndex }` }
          </h2>
          Please select a shipping method for these Items.
          { shipmentMarkup }

          <Field name={ `${ this.props.fieldNamePrefix }[id]` }
                 value={ `${shipment.id}` }
                 component="input"
                 type="hidden" />
        </div>
      </div>
    );
  };
};

export default Shipment;
