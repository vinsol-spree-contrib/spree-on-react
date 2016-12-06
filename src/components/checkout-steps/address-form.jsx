import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form';

import Layout from "../layout";
import BaseCheckoutLayout from "./base-checkout-layout";
import AddressFields from "./address-fields";

class AddressForm extends Component {

  handleAddressFormSubmit (formData) {
    this.props.handleAddressFormSubmit(formData, this.props.order);
  };

  componentDidMount () {
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
            <AddressFields fieldNamePrefix="order[bill_address_attributes]" />
            <div>
              <label htmlFor="use_billing">Ship to billing address</label>
              <Field name="use_billing" component="input" type="checkbox" />
            </div>

            {
              useBilling &&
              <AddressFields fieldNamePrefix="order[ship_address_attributes]" />
            }

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

const selector = formValueSelector('addressForm') // <-- same as form name
AddressForm = connect(
  state => {
    const useBilling = selector(state, 'use_billing');
    return {
      useBilling
    };
  }
)(AddressForm)

export default AddressForm;
