import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form';

import Layout from "../layout";
import BaseCheckoutLayout from "./base-checkout-layout";
import AddressFieldsConnector from "../../containers/checkout-steps/address-fields-connector";

class AddressForm extends Component {

  /* Render this step only if order is present and in a valid checkout state. */
  componentWillMount() {
    let orderState = this.props.order.state;

    if (orderState === undefined || this.props.order.checkout_steps.indexOf(orderState) === -1) {
      this.props.handleOrderNotPresent();
    }
  };

  handleAddressFormSubmit (formData) {
    this.props.handleAddressFormSubmit(formData, this.props.order);
  };

  componentDidMount () {
    this.props.setCurrentCheckoutStep();
    if (this.props.countries.length === 0) {
      this.props.fetchCountries();
    }
  };

  render() {
    const useBilling = this.props.useBilling;
    return (
      <Layout>
        <BaseCheckoutLayout currentStep="address" displayLoader={ this.props.displayLoader }>
          <form onSubmit={this.props.handleSubmit(this.handleAddressFormSubmit.bind(this))}>
            <div>
              <label htmlFor="order_email">Email</label>
              <Field name="order[email]" component="input" type="text" id="order_email" />
            </div>
            <AddressFieldsConnector fieldNamePrefix="order[bill_address_attributes]"
                                    countries={ this.props.countries } />
            <div>
              <label htmlFor="use_billing">Ship to billing address</label>
              <Field name="order[use_billing]" component="input" type="checkbox" />
            </div>

            {
              !useBilling &&
              <AddressFieldsConnector fieldNamePrefix="order[ship_address_attributes]"
                                      countries={ this.props.countries } />
            }

            <div>
              <label htmlFor="save_user_address">Remember this Address</label>
              <Field name="save_user_address" component="input" type="checkbox" id="save_user_address" />
            </div>

            <button type="submit">Submit</button>
          </form>
        </BaseCheckoutLayout>
      </Layout>
    );
  };
};

AddressForm = reduxForm({
  form: 'addressForm'
})(AddressForm);

const selector = formValueSelector('addressForm');
AddressForm = connect(
  state => {
    const useBilling = selector(state, 'order[use_billing]');
    return {
      useBilling,
      initialValues: {
        order: {
          email: state.order.email,
          bill_address_attributes: {
            address1: state.order.bill_address.address1,
            address2: state.order.bill_address.address2,
            firstname: state.order.bill_address.firstname,
            lastname: state.order.bill_address.lastname,
            city: state.order.bill_address.city,
            country_id: state.order.bill_address.country_id,
            state_id: state.order.bill_address.state_id,
            zipcode: state.order.bill_address.zipcode,
            phone: state.order.bill_address.phone
          },
          ship_address_attributes: {
            address1: state.order.ship_address.address1,
            address2: state.order.ship_address.address2,
            firstname: state.order.ship_address.firstname,
            lastname: state.order.ship_address.lastname,
            city: state.order.ship_address.city,
            country_id: state.order.ship_address.country_id,
            state_id: state.order.ship_address.state_id,
            zipcode: state.order.ship_address.zipcode,
            phone: state.order.ship_address.phone,
          }
        }
      }
    };
  }
)(AddressForm)

export default AddressForm;
