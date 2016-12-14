import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector, SubmissionError } from 'redux-form';

import Layout from "../layout";
import BaseCheckoutLayout from "./base-checkout-layout";
import AddressFieldsConnector from "../../containers/checkout-steps/address-fields-connector";
import CheckoutStepCalculator from '../../services/checkout-step-calculator';
import FormField from './shared/form-field';

class AddressForm extends Component {

  /* Render this step only if order is present and in a valid checkout state. */
  componentWillMount() {
    let order = this.props.order;

    if (!CheckoutStepCalculator.isStepEditable(order.checkout_steps, 'address', order.state)){
      this.props.handleOrderNotPresent();
    }
  };

  handleAddressFormSubmit (formData) {
    return this.props.handleAddressFormSubmit(formData, this.props.order).then((response) => {
    },
    (error) => {
      let sanitizedErrors = this._sanitizedErrorMessages(error.response.body.errors);
      throw new SubmissionError({ order: sanitizedErrors });
    });
  };

  componentDidMount () {
    this.props.setCurrentCheckoutStep();
    if (this.props.countries.length === 0) {
      this.props.fetchCountries();
    }
  };

  render() {
    const useBilling = this.props.useBilling;
    const { handleSubmit } = this.props;
    // const { error, handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <Layout>
        <BaseCheckoutLayout currentStep="address"
                            displayLoader={ this.props.displayLoader }
                            checkoutSteps={ this.props.order.checkout_steps || [] } >
          <form onSubmit={ handleSubmit(this.handleAddressFormSubmit.bind(this)) }>

            <div className="form-heading-title">General Info</div>

            <Field className="form-control"
                name="order[email]"
                component={FormField.inputFieldMarkup}
                label="Email"
                type="text" />

            <div className="form-heading-title">Billing Info</div>
            <AddressFieldsConnector fieldNamePrefix="order[bill_address_attributes]"
                                    countries={ this.props.countries } />

            <Field className="form-control"
                name="order[use_billing]"
                component={FormField.inputFieldMarkup}
                label="Ship to billing address"
                type="checkbox" />


            {
              !useBilling &&

              <AddressFieldsConnector fieldNamePrefix="order[ship_address_attributes]"
                                      countries={ this.props.countries } >
                <div className="form-heading-title">Shipping Info</div>
              </AddressFieldsConnector>
            }

            <Field className="form-control"
                name="order[save_user_address]"
                component={FormField.inputFieldMarkup}
                label="Remember this Address"
                type="checkbox" />

            <div className="form-group">
              <div className="col-sm-10 col-sm-offset-2">
                <button type="submit" className="btn btn-success btn-lg">Save Address</button>
              </div>
            </div>
          </form>
        </BaseCheckoutLayout>
      </Layout>
    );
  };

  _sanitizedErrorMessages (errors) {
    var unflatten = require('flat').unflatten;

    let unflattenedErrors = unflatten(errors);
    unflattenedErrors.bill_address_attributes = unflattenedErrors.bill_address;
    unflattenedErrors.ship_address_attributes = unflattenedErrors.ship_address;

    return unflattenedErrors;
  }

  // def shipping_eq_billing_address?
  //     (bill_address.empty? && ship_address.empty?) || bill_address.same_as?(ship_address)
  //   end
};

AddressForm = reduxForm({
  form: 'addressForm'
})(AddressForm);

const selector = formValueSelector('addressForm');
AddressForm = connect(
  state => {
    const useBilling = selector(state, 'order[use_billing]');
    const billAddress = state.order.bill_address || {};
    const shipAddress = state.order.ship_address || {};
    return {
      useBilling,
      initialValues: {
        save_user_address: true,
        order: {
          use_billing: true,
          email: state.order.email,
          bill_address_attributes: {
            address1: billAddress.address1,
            address2: billAddress.address2,
            firstname: billAddress.firstname,
            lastname: billAddress.lastname,
            city: billAddress.city,
            country_id: billAddress.country_id,
            state_id: billAddress.state_id,
            zipcode: billAddress.zipcode,
            phone: billAddress.phone
          },
          ship_address_attributes: {
            address1: shipAddress.address1,
            address2: shipAddress.address2,
            firstname: shipAddress.firstname,
            lastname: shipAddress.lastname,
            city: shipAddress.city,
            country_id: shipAddress.country_id,
            state_id: shipAddress.state_id,
            zipcode: shipAddress.zipcode,
            phone: shipAddress.phone,
          }
        }
      }
    };
  }
)(AddressForm)

export default AddressForm;
