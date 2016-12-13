import React, { Component } from "react";
import { Accordion, Panel } from "react-bootstrap";

import Loader from "../shared/loader"

class BaseCheckoutLayout extends Component {

  render() {
    this.checkoutStepsMarkup = [];
    this.__generateCheckoutStepsMarkup(this.props.currentStep);
    let activePanelKey = this.props.currentStep;

    return (
      <div className="row checkout-flow">
        <Loader displayLoader={ this.props.displayLoader } />
        <Accordion activeKey={ activePanelKey }>
          { this.checkoutStepsMarkup }
        </Accordion>
      </div>
    );
  };

  __generateCheckoutStepsMarkup (currentStep) {
    this.props.checkoutSteps.forEach((checkoutStep) => {
      let titleizedStepName = checkoutStep[0].toUpperCase() + checkoutStep.substr(1).toLowerCase();
      this.__generateMarkupForStep(currentStep, checkoutStep.trim(), `${ titleizedStepName } Details`);
    });
  };

  __generateMarkupForStep (currentStep, thisStep, title) {
    let innerHtml = currentStep === thisStep.trim() ? this.props.children : title;

    this.checkoutStepsMarkup.push (
      <Panel header={ title } eventKey={ thisStep } key={`${ thisStep }-step`}>
        { innerHtml }
      </Panel>
    );
  };

};

export default BaseCheckoutLayout;
