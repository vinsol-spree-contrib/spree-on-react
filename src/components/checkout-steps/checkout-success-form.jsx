import React, { Component } from 'react';

import Layout from "../layout";
import BaseCheckoutLayout from "./base-checkout-layout";
import OrderPanelView from '../order/panel-view';

class CheckoutSuccessForm extends Component {

  /* Render this step only if order is present and in a valid checkout state. */
  componentWillMount() {
    if (this.props.order.state === 'complete') {
      let dupeOrder = Object.assign(this.props.order);
      this.props.saveOrderAsPlaced(dupeOrder);
    }
    else {
      this.props.handleCheckoutStepNotEditable(this.props.order);
    }
  };

  componentDidMount () {
    if (this.props.order.state === 'complete') {
      this.props.clearOrder();
    }
  };

  render() {
    return (
      <Layout>
        <BaseCheckoutLayout currentStep="complete"
                            displayLoader={ this.props.displayLoader }
                            checkoutSteps={ this.props.placedOrder.checkout_steps || [] }
                            placedOrder={ this.props.placedOrder } >
          <div className="row">
            <div className="col-md-12">
              <strong className="text text-success">
                Your Order has been placed successfully!
                <br/><br/>
              </strong>
              <OrderPanelView order={ this.props.placedOrder } />
            </div>
          </div>
        </BaseCheckoutLayout>
      </Layout>
    );
  };
};

export default CheckoutSuccessForm;
