import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import Layout from "../layout";
import BaseCheckoutLayout from "./base-checkout-layout";
import CheckoutStepCalculator from '../../services/checkout-step-calculator';
import CardFields from './payment/card-fields';

class PaymentForm extends Component {

  /* Render this step only if order is present and in a valid checkout state. */
  componentWillMount() {
    let order = this.props.order;

    if (!CheckoutStepCalculator.isStepEditable(order.checkout_steps, 'payment', order.state)){
      this.props.handleCheckoutStepNotEditable(order);
    }
  };

  componentDidMount() {
    this.props.setCurrentCheckoutStep();
  };

  handlePaymentFormSubmit (formData) {
    this.props.handlePaymentFormSubmit(formData, this.props.order);
  };

  render() {
    const { handleSubmit, valid, submitting, order } = this.props;
    let paymentMethods = order.payment_methods || [];
    let paymentMethodMarkup = paymentMethods.map((paymentMethod, idx) => {
      return (
        <div key={ idx } className="form-group">
          <div className="radio inline">
            <label>
              <Field name={ `order[payments_attributes][0][payment_method_id]` }
                    component="input"
                    type="radio"
                    value={ `${paymentMethod.id}` } />
              { paymentMethod.name }
            </label>
          </div>
        </div>
      )
    });
    return (
      <Layout>
        <BaseCheckoutLayout currentStep="payment"
                            displayLoader={ this.props.displayLoader }
                            checkoutSteps={ order.checkout_steps || [] } >
          <form onSubmit={ handleSubmit(this.handlePaymentFormSubmit.bind(this)) }>
            { paymentMethodMarkup }
            { this.props.useCard===2 &&
              <CardFields />
            }
            <button type="submit"
                    className="btn btn-success"
                    disabled={ !valid || submitting } >
                      Save Payment Details
            </button>
          </form>
        </BaseCheckoutLayout>
      </Layout>
    );
  };
};

PaymentForm = reduxForm({
  form: 'paymentForm'
})(PaymentForm);

const selector = formValueSelector('paymentForm');
PaymentForm = connect(
  state => {
    const useCard = selector(state, 'order[payments_attributes][0][payment_method_id]');
    return {
      useCard
    };
  }
)(PaymentForm)

export default PaymentForm;
