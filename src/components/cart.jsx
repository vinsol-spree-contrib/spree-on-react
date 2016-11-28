import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <div id="navbar">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a>
              <span className="glyphicon glyphicon-shopping-cart">
              </span>
              &nbsp;
              Cart
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Cart;
