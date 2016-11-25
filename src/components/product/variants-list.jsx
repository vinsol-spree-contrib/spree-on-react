import React, { Component } from 'react';
import Variant from './variant';

class VariantsList extends Component {
  render() {
    let variantsList;
    variantsList = this.props.variantsList.map((variant, idx) => {
      return (
        <Variant key={variant.id} variant={variant} onChangeVariant={this.props.onChangeVariant} />
      )
    });

    return (
      <div id="product-variants" className="col-md-6">
        <h3 className="product-section-title">Variants</h3>
        <ul className="list-group">
          {variantsList}
        </ul>
      </div>
    );
  }
};
export default VariantsList;
