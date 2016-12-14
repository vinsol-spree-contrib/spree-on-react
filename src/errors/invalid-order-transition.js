function InvalidOrderTransitionException(message) {
    this.message = message;
    // Use V8's native method if available, otherwise fallback
    if ("captureStackTrace" in Error)
        Error.captureStackTrace(this, InvalidOrderTransitionException);
    else
        this.stack = (new Error()).stack;
};

InvalidOrderTransitionException.prototype = Object.create(Error.prototype);
InvalidOrderTransitionException.prototype.name = "InvalidOrderTransitionException";
InvalidOrderTransitionException.prototype.constructor = InvalidOrderTransitionException;

export default InvalidOrderTransitionException;
