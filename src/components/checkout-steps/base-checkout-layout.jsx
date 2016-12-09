import React, { Component } from "react";
import { Accordion, Panel } from "react-bootstrap";

import Loader from "../shared/loader"

class BaseCheckoutLayout extends Component {

  render() {
    this.checkoutStepsMarkup = [];
    this.__generateCheckoutStepsMarkup(this.props.currentStep);
    let activePanelKey = this._activeKeyForState(this.props.currentStep);

    return (
      <div className="row checkout-flow">
        <Loader displayLoader={this.props.displayLoader} />
        <Accordion activeKey={ activePanelKey }>
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
      <Panel header="Address Details" eventKey="1" key="address-step" bsStyle="danger">
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

  /* Returns the eventKey for the currentStep to determine the panel to be
      displayed in the accordion.
      1. address
      2. delivery
  */
  _activeKeyForState (currentStep) {
    switch (currentStep) {
      case "address":
        return "1";
      case "delivery":
        return "2";
      default:
        return "1";
    }
  };
};

export default BaseCheckoutLayout;
