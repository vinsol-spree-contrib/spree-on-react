import React, { Component } from "react";
import { Link } from 'react-router';

import Loader from "../shared/loader"
import APP_ROUTES from '../../constants/app-routes';

import OrderSummaryConnector from '../../containers/order/summary-connector';

class BaseCheckoutLayout extends Component {

  render() {
    this.checkoutStepsMarkup = [];
    this.__generateCheckoutStepsMarkup(this.props.currentStep);

    return (
      <div className="checkout-flow checkout-section">
        <Loader displayLoader={ this.props.displayLoader } />
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              { this.checkoutStepsMarkup }
            </div>
            <div className="col-sm-3 col-sm-offset-1">
              <OrderSummaryConnector placedOrder={ this.props.placedOrder } />
            </div>
          </div>
        </div>
      </div>
    );
  };

  /*
    This function iterates over all the steps and calls another function for
    generating markup for each step.
  */
  __generateCheckoutStepsMarkup (currentStep) {
    this.props.checkoutSteps.forEach((checkoutStep) => {
      let titleizedStepName = checkoutStep[0].toUpperCase() + checkoutStep.substr(1).toLowerCase();
      this.__generateMarkupForStep(currentStep, checkoutStep.trim(), `${ titleizedStepName }`);
    });
  };

  /*
    This function generates two things, namely, the title section for each
    checkout step and the content for the checkout step body (actual form).
    It then pushes the result into +checkoutStepsMarkup+.
  */
  __generateMarkupForStep (currentStep, thisStep, title) {
    thisStep = thisStep.trim();


    const innerHtml = this.__generateMarkupForStepBody(currentStep, thisStep, title);
    const formattedTitle = <Link to={ APP_ROUTES.checkout[`${ thisStep.trim() }PageRoute`] }>
                             { title }
                           </Link>;

    this.checkoutStepsMarkup.push (
        <div className="checkout-block-container checkout-title-block" key={`${ thisStep }-step`}>
          <h4 className="section-heading">
            { formattedTitle }
          </h4>
          { innerHtml }
        </div>
    );
  };

  /*
    This generates mark up for step body(form fields for the step etc) if the
    +thisStep+ is same as the +currentStep+. It doesn't generate markup for the
    step title.
  */
  __generateMarkupForStepBody (currentStep, thisStep, title) {
    if ( currentStep === thisStep ) {
      return (
        <div className="checkout-block-content">
          { this.props.children }
        </div>
      );
    }
    else {
      return null;
    }
  };

};

export default BaseCheckoutLayout;
