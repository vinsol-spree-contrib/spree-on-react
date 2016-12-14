import React from 'react';

const FormField = {
  inputFieldMarkup: ({ input, label, type, meta: { touched, error } }) => {
    return(
      <div>
        <label>
          { label }
        </label>
        <div>
          <input { ...input } placeholder={ label } type={ type }/>
          { touched && error && <span>{ error }</span> }
        </div>
      </div>
    );
  }

};

export default FormField;
