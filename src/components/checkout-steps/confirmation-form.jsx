import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import Layout from "../layout";
import BaseCheckoutLayout from "./base-checkout-layout";
import CheckoutStepCalculator from '../../services/checkout-step-calculator';

import Address from '../order/address';
import LineItem from '../order/line-item';

class ConfirmationForm extends Component {

  /* Render this step only if order is present and in a valid checkout state. */
  componentWillMount() {
    let order = this.props.order;

    if (!CheckoutStepCalculator.isStepEditable(order.checkout_steps, 'confirm', order.state)){
      this.props.handleCheckoutStepNotEditable(order, this.props.placedOrder);
    }
  };

  componentDidMount() {
    this.props.setCurrentCheckoutStep();
  };

  handleFormSubmit (formData) {
    this.props.handleFormSubmit(formData, this.props.order);
  };

  _shipmentLineItemsMarkup () {
    let thisShipment = this.props.order.shipments[0];
    let shipmentLineItems = this.props.order.line_items.filter((lineItem) => {
      return (lineItem.variant_id !== thisShipment.manifest.variant_id);
    });
    return shipmentLineItems.map((lineItem, idx) => {
      return <LineItem lineItem={ lineItem } key={ idx } />
    });
  };


  render() {
    const { handleSubmit, valid, submitting } = this.props;
    return (
      <Layout>
        <BaseCheckoutLayout currentStep="confirm"
                            displayLoader={ this.props.displayLoader }
                            checkoutSteps={ this.props.order.checkout_steps || [] } >
          <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
            <div className="row">
              <div className="col-md-3">
                <h4> Billing Address : </h4>
                <Address address={ this.props.order.bill_address } />
              </div>
              <div className="col-md-3">
                <h4> Shipping Address : </h4>
                <Address address={ this.props.order.ship_address } />
              </div>
            </div>
            <hr/>
            <div className="form-group">
              <div className="col-md-12">
                <h4> Order Items </h4>
                { this._shipmentLineItemsMarkup() }
              </div>
            </div>
            <div className="btn-action-block clearfix">
              <button type="submit"
                    disabled={ !valid || submitting }
                    className="btn btn-success btn-lg">
                      Confirm your order
              </button>
            </div>
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
