import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class Flash extends Component {

  render() {
    let flashDiv = null;
    if (this.props.flash.visible) {
        flashDiv =  <Alert bsStyle={ this.props.flash.type } onDismiss={ this.props.handleAlertDismiss }>
                      { this.props.flash.message }
                    </Alert>;
    }

    return (
      <div className='flash'>{ flashDiv }</div>
    );
  };

};

export default Flash;
