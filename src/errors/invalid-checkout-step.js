function InvalidCheckoutStepException(message) {
    this.message = message;
    // Use V8's native method if available, otherwise fallback
    if ("captureStackTrace" in Error)
        Error.captureStackTrace(this, InvalidCheckoutStepException);
    else
        this.stack = (new Error()).stack;
};

InvalidCheckoutStepException.prototype = Object.create(Error.prototype);
InvalidCheckoutStepException.prototype.name = "InvalidCheckoutStepException";
InvalidCheckoutStepException.prototype.constructor = InvalidCheckoutStepException;

export default InvalidCheckoutStepException;
