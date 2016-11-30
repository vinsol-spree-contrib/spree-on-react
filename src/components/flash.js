import React, { Component } from 'react';

class Flash extends Component {

  render() {
    let flashDiv = null;
    if(this.props.flash.visible){
        flashDiv = <div className={`${this.props.flash.type} pull-right`}>
                      {this.props.flash.message}
                    </div>;
      }
    return (
      <div className='flash'>{flashDiv}</div>
    );
  }
}

export default Flash;

