import React, { Component } from 'react';

class VariantsList extends Component {

  render() {
    let variantsList;
    variantsList = this.props.variantsList.map((variant, idx) => {
      return (
        <li className="variant row" key={variant.id}>
          <input type="radio" name="variant_id"
              id={"variant_id_" + variant.id}
              value={variant.id}
              data-price={"$" + variant.price}
              onChange={()=>this.props.onChangeVariant(variant)} checked={this.props.currentVariant===variant}/>
          {variant.options_text}
          <b>{variant.in_stock ? '' : 'Out of Stock'}</b>
        </li>
      )
    });

    let renderString = null;
    if(this.props.variantsList.length > 0){
      renderString = <div id="product-variants" className="col-md-6">
        <h3 className="product-section-title">Variants</h3>
        <ul className="list-group">
          {variantsList}
        </ul>
      </div>
    }

    return (
      renderString
    );
  }
};
export default VariantsList;
