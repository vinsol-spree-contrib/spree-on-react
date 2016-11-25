import React, { Component } from 'react';

class Variant extends Component {
  constructor(props){
    super(props);
    this.onChangeVariant = this.onChangeVariant.bind(this);
  }

  onChangeVariant(){
    this.props.onChangeVariant(this.props.variant)
  }
  render() {

    return (
      <li className="variant row">
          <input type="radio" name="variant_id"
                  id={"variant_id_" + this.props.variant.id}
                  value={this.props.variant.id}
                  data-price={"$" + this.props.variant.price}
                  onChange={this.onChangeVariant} />
          {this.props.variant.options_text}
      </li>
    );
  }
};
export default Variant;
