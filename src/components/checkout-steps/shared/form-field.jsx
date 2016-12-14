import React from 'react';

const FormField = {
  inputFieldMarkup: ({ input, label, type, meta: { touched, error } }) => {
    let inputClassName;
    inputClassName = type === 'text' ? 'form-control ' : ' ';

    return(
      <div>
        <input { ...input } className={inputClassName} placeholder={ label } type={ type }/>
        { touched && error && <span>{ error }</span> }
        
      </div>
    );
  }

};

export default FormField;
