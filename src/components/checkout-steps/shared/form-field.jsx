import React from 'react';

const FormField = {
  inputFieldMarkup: ({ input, label, type, meta: { touched, error } }) => {
    let inputClassName, errorClassName;
    inputClassName = type === 'text' ? 'primary-input-field ' : ' ';

    if (touched && error) {
      errorClassName = "has-error ";
    }

    return(
      <div className={ "checkout-form-row " + errorClassName }>
        <label htmlFor={ input.name } className="checkout-form-label">{ label }</label>
        <div className="checkout-form-fields">
          <input { ...input }
                  className={ inputClassName }
                  placeholder={ label }
                  type={ type }
                  id={ input.name } />
          { touched && error && <span className="help-block">{ error }</span> }
        </div>
      </div>
    );
  }

};

export default FormField;
