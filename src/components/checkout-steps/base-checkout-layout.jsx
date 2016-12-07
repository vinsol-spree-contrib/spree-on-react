import React, { Component } from "react";
import { Accordion, Panel } from "react-bootstrap";

import Loader from "../shared/loader"

class BaseCheckoutLayout extends Component {

  render() {
    this.checkoutStepsMarkup = [];
    this.__generateCheckoutStepsMarkup(this.props.currentStep);

    return (
      <div className="row checkout-flow">
        <Loader displayLoader={this.props.displayLoader} />
        <Accordion>
          { this.checkoutStepsMarkup }
        </Accordion>
      </div>
    );
  };

  __generateCheckoutStepsMarkup (currentStep) {
    this.__generateAddressStepMarkup(currentStep);
    this.__generateDeliveryStepMarkup(currentStep);
  };

  __generateAddressStepMarkup (currentStep) {
    let innerHtml = currentStep === "address" ? this.props.children : "Address Details";

    this.checkoutStepsMarkup.push (
      <Panel header="Address Details" eventKey="1" key="address-step">
        { innerHtml }
      </Panel>
    );
  };

  __generateDeliveryStepMarkup (currentStep) {
    let innerHtml = currentStep === "delivery" ? this.props.children : "Delivery Details";

    this.checkoutStepsMarkup.push (
      <Panel header="Delivery Details" eventKey="2" key="delivery-step">
        { innerHtml }
      </Panel>
    );
  };
};

export default BaseCheckoutLayout;
