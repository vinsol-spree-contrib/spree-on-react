const CheckoutStepCalculator = {
  next: (checkoutSteps, currentStep) => {
    if (CheckoutStepCalculator.isLastStep(checkoutSteps, currentStep)) {
      return "";
    }
    else {
      let indexOfCurrentStep = checkoutSteps.indexOf(currentStep);
      return checkoutSteps[indexOfCurrentStep + 1];
    }
  },

  previous: (checkoutSteps, currentStep) => {
    if (CheckoutStepCalculator.isFirstStep(checkoutSteps, currentStep)) {
      return 'cart';
    }
    else {
      let indexOfCurrentStep = checkoutSteps.indexOf(currentStep);
      return checkoutSteps[indexOfCurrentStep - 1];
    }
  },

  isPristineStep: (checkoutSteps, currentStep, orderState) => {
    if (CheckoutStepCalculator.isLastStep(checkoutSteps, currentStep)) {
      return true;
    }
    else {
      let indexOfCurrentStep = checkoutSteps.indexOf(currentStep);
      let indexOfOrderState = checkoutSteps.indexOf(orderState);

      return indexOfCurrentStep >= indexOfOrderState;
    }
  },

  isStepEditable: (checkoutSteps, currentStep, orderState) => {
    let indexOfCurrentStep = checkoutSteps.indexOf(currentStep);
    let indexOfOrderState = checkoutSteps.indexOf(orderState);

    return !CheckoutStepCalculator.isLastStep(checkoutSteps, orderState) &&
            ( currentStep === orderState ||
            indexOfOrderState >= indexOfCurrentStep );
  },

  isLastStep: (checkoutSteps, currentStep) => {
    let indexOfCurrentStep = checkoutSteps.indexOf(currentStep);

    return (indexOfCurrentStep === (checkoutSteps.length - 1));
  },

  isFirstStep: (checkoutSteps, currentStep) => {
    let indexOfCurrentStep = checkoutSteps.indexOf(currentStep);

    return (indexOfCurrentStep === 0);
  },

  isValidStep: (checkoutSteps, currentStep) => {
    return (checkoutSteps.indexOf(currentStep) !== -1);
  }

}

export default CheckoutStepCalculator;
