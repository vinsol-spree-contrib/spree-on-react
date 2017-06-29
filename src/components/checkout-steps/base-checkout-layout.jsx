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

  __generateCheckoutStepsMarkup (currentStep) {
    this.props.checkoutSteps.forEach((checkoutStep) => {
      let titleizedStepName = checkoutStep[0].toUpperCase() + checkoutStep.substr(1).toLowerCase();
      this.__generateMarkupForStep(currentStep, checkoutStep.trim(), `${ titleizedStepName }`);
    });
  };

  __generateMarkupForStep (currentStep, thisStep, title) {
    thisStep = thisStep.trim();


    const innerHtml = this.__generateMarkupForStepBody(currentStep, thisStep, title);
    const formattedTitle = <Link to={ APP_ROUTES.checkout[`${ thisStep.trim() }PageRoute`] }>
                             { title }
                           </Link>;

    this.checkoutStepsMarkup.push (
        <div className="checkout-block-container" key={`${ thisStep }-step`}>
          <h4 className="section-heading">
            { formattedTitle }
          </h4>
          { innerHtml }
        </div>
    );
  };

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
