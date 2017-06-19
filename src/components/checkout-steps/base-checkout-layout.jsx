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
      <div className="row checkout-flow dark-color container-fluid">
        <Loader displayLoader={ this.props.displayLoader } />
        <div className="col-md-9">
          <div className="panel-group form-horizontal">
            { this.checkoutStepsMarkup }
          </div>
        </div>
        <div className="col-md-3">
          <OrderSummaryConnector placedOrder={ this.props.placedOrder } />
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
        <div className="panel panel-default" key={`${ thisStep }-step`}>
          <div className="panel-heading">
            <h4 className="panel-title">
              { formattedTitle }
            </h4>
          </div>
          { innerHtml }
        </div>
    );
  };

  __generateMarkupForStepBody (currentStep, thisStep, title) {
    if ( currentStep === thisStep ) {
      return (
        <div className="panel-body">
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
