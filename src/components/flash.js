import React, { Component } from 'react';

class Flash extends Component {

  render() {
    let FlashDiv = null;
    if(this.props.flash.visible){
        FlashDiv = <div className={this.props.flash.type + ' pull-right'}>
                      {this.props.flash.message}
                    </div>
      }
    return (
      <div className='flash'>{FlashDiv}</div>
    );
  }
}

export default Flash;

