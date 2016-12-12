import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import Layout from "../layout";
import BaseCheckoutLayout from "./base-checkout-layout";
import Shipment from './delivery/shipment';

class DeliveryForm extends Component {

  /* Render this step only if order is present and in a valid checkout state. */
  componentWillMount() {
    // let orderState = this.props.order.state;

    // if (orderState === undefined || this.props.order.checkout_steps.indexOf(orderState) === -1) {
    //   this.props.handleOrderNotPresent();
    // }
  };

  handleDeliveryFormSubmit (formData) {
    this.props.handleDeliveryFormSubmit(formData, this.props.order);
  };

  render() {
    let shipments = this.props.order.shipments;

    let shipmentsMarkup = shipments.map((shipment, idx) => {
      return (
        <Shipment shipment={ shipment }
                  key={ idx }
                  shipmentIndex={ idx + 1 }
                  fieldNamePrefix={`order[shipments_attributes][${ idx }]`} />
      );
    });

    return (
      <Layout>
        <BaseCheckoutLayout currentStep="delivery" displayLoader={ this.props.displayLoader }>
          <form onSubmit={ this.props.handleSubmit(this.handleDeliveryFormSubmit.bind(this)) }>
            <div>
              { shipmentsMarkup }
            </div>

            <button type="submit">Submit</button>
          </form>
        </BaseCheckoutLayout>
      </Layout>
    );
  };
};

DeliveryForm = reduxForm({
  form: 'deliveryForm'
})(DeliveryForm);

export default DeliveryForm;
