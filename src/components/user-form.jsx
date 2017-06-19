import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class userFormBlock extends Component {

  render() {
    return (
      <article className={ "global-modal user-form-modal " + (this.props.showModal ? 'show-modal' : '') }>
        <span className="btn-close btn-left" onClick={ this.props.close }></span>

        <div className="center-block user-form-process">
          <div className="cmn-user-form">
            <div className="form-heading-title center-heading no-border big">
              <FormattedMessage
                id="shared.login"
                defaultMessage="Login"
              />
            </div>
            { this.props.children }
          </div>
        </div>

      </article>
    );
  }
}

export default userFormBlock;
