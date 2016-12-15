import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import Layout from "../layout";
import BaseCheckoutLayout from "./base-checkout-layout";
import CheckoutStepCalculator from '../../services/checkout-step-calculator';

class ConfirmationForm extends Component {

  /* Render this step only if order is present and in a valid checkout state. */
  componentWillMount() {
    let order = this.props.order;

    if (!CheckoutStepCalculator.isStepEditable(order.checkout_steps, 'confirm', order.state)){
      this.props.handleCheckoutStepNotEditable();
    }
  };

  componentDidMount() {
    this.props.setCurrentCheckoutStep();
  };

  handleFormSubmit (formData) {
    this.props.handleFormSubmit(formData, this.props.order);
  };

  render() {
    const { handleSubmit, valid, submitting } = this.props;

    return (
      <Layout>
        <BaseCheckoutLayout currentStep="confirm"
                            displayLoader={ this.props.displayLoader }
                            checkoutSteps={ this.props.order.checkout_steps || [] } >
          <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
            <div>
              Please Just confirm
            </div>

            <button type="submit"
                    disabled={ !valid || submitting }
                    className="btn btn-success btn-lg">
                      Confirm your order
            </button>
          </form>
        </BaseCheckoutLayout>
      </Layout>
    );
  };
};

ConfirmationForm = reduxForm({
  form: 'confirmationForm'
})(ConfirmationForm);

export default ConfirmationForm;
