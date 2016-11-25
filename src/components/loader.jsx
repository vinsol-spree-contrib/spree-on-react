import React, { Component } from 'react';
import loaderImage from '../images/loader.svg';

class Loader extends Component {
  render() {
    let LoaderDiv = null;
    if(this.props.displayLoader){
        LoaderDiv = <div>
                      <img className='loader' src={loaderImage} alt='Loader'/>
                    </div>
      }
    return (
      LoaderDiv
    );
  }
}

export default Loader;

