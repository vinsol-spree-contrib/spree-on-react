import React, { Component } from 'react';

import Layout from "../layout";
import BaseCheckoutLayout from "./base-checkout-layout";

class CheckoutSuccessForm extends Component {

  componentDidMount() {
    // this.props.setCurrentCheckoutStep();
  };

  render() {
    return (
      <Layout>
        <BaseCheckoutLayout currentStep="delivery" displayLoader={ this.props.displayLoader }>
          <div className="row">
            <div className="col-md-12">
              Your Order has been placed successfully.
            </div>
          </div>
        </BaseCheckoutLayout>
      </Layout>
    );
  };
};

export default CheckoutSuccessForm;
