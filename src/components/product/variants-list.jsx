import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class VariantsList extends Component {

  render() {
    let variantsList;
    const outOfStockRep = <FormattedMessage
                            id="label.outOfStock"
                            defaultMessage="Out of Stock"
                          />
    variantsList = this.props.variantsList.map((variant, idx) => {
      return (
        <div className="variant col-md-6" key={variant.id}>
          <label className="radio">
              <input type="radio" name="variant_id"
                  id={"variant_id_" + variant.id}
                  value={variant.id}
                  data-price={"$" + variant.price}
                  onChange={()=>this.props.onChangeVariant(variant)}
                  checked={this.props.currentVariant===variant}/>
              { variant.options_text }
              <b>{ variant.in_stock ? '' : `(${ outOfStockRep })` }</b>
          </label>
        </div>
      )
    });

    let renderString = null;
    if(this.props.variantsList.length > 0){
      renderString = <div id="product-variants" className="col-md-12 text-left">
        <h3 className="product-variant-title">
          <FormattedMessage
            id="shared.models.variant"
            defaultMessage="Variant"
          />
        </h3>
        { variantsList }
      </div>
    }

    return (
      renderString
    );
  }
};

export default VariantsList;
