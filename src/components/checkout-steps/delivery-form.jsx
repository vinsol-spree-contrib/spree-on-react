import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';

import Layout from "../layout";
import BaseCheckoutLayout from "./base-checkout-layout";

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
    return (
      <Layout>
        <BaseCheckoutLayout currentStep="delivery" displayLoader={ this.props.displayLoader }>
          <form onSubmit={this.props.handleSubmit(this.handleDeliveryFormSubmit.bind(this))}>
            <div>
              <label htmlFor="order_email">Email</label>
              <Field name="order[email]" component="input" type="text" id="order_email" />
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
