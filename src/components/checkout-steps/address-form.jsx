import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import Layout from "../layout";
import BaseCheckoutLayout from "./base-checkout-layout";

class AddressForm extends Component {

  handleAddressFormSubmit (formData) {
    this.props.handleAddressFormSubmit(formData, this.props.order);
  };

  render() {
    return (
      <Layout>
        <BaseCheckoutLayout currentStep="address">
          <form onSubmit={this.props.handleSubmit(this.handleAddressFormSubmit.bind(this))}>
            <div>
              <label htmlFor="firstname">First Name</label>
              <Field name="order[bill_address_attributes][firstname]" component="input" type="text" />
            </div>

            <div>
              <label htmlFor="lastname">Last Name</label>
              <Field name="order[bill_address_attributes][lastname]" component="input" type="text" />
            </div>

            <div>
              <label htmlFor="address1">Address Line 1</label>
              <Field name="order[bill_address_attributes][address1]" component="input" type="text" />
            </div>

            <div>
              <label htmlFor="address2">Address Line 2</label>
              <Field name="order[bill_address_attributes][address2]" component="input" type="text" />
            </div>

            <div>
              <label htmlFor="city">City</label>
              <Field name="order[bill_address_attributes][city]" component="input" type="text" />
            </div>

            <div>
              <label htmlFor="zipcode">Zip Code</label>
              <Field name="order[bill_address_attributes][zipcode]" component="input" type="text" />
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <Field name="order[bill_address_attributes][phone]" component="input" type="text" />
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

export default AddressForm;
