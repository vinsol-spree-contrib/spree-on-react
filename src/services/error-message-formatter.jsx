import React from 'react';

const ErrorMessageFormatter = {

  formatFormSubmissionErrors: (errors) => {
    const title = 'Please fix the below errors.';
    let errorMessageList = errors.map((error, idx) => {
      return (
        <li key={ idx }>
          { error }
        </li>
      );
    });

    return (
      <div>
        <h4> { title } </h4>

        <ul>
          { errorMessageList }
        </ul>
      </div>
    );
  }
};

export default ErrorMessageFormatter;
