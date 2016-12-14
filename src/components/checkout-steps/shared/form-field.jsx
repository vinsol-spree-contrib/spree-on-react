import React from 'react';

const FormField = {
  inputFieldMarkup: ({ input, label, type, meta: { touched, error } }) => {
    let inputClassName, errorClassName;
    inputClassName = type === 'text' ? 'form-control ' : ' ';

    if (touched && error) {
      errorClassName = "has-error ";
    }

    return(
      <div className={`form-group ${ errorClassName }`}>
        <label htmlFor={input.name} className="col-sm-2 control-label">{ label }</label>
        <div className="col-sm-10">
          <input { ...input }
                  className={ inputClassName }
                  placeholder={ label }
                  type={ type }
                  id={ input.name } />
          { touched && error && <span>{ error }</span> }
        </div>
      </div>
    );
  }

};

export default FormField;
