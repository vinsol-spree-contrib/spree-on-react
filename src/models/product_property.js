import {fk, many, attr, Model} from 'redux-orm';

class ProductProperty extends Model {
  toString() {
    return `ProductProperty #${ this.id }`;
  };
};

ProductProperty.modelName = "ProductProperty";
ProductProperty.fields = {
  id: attr(),
  property_name: attr(),
  presentation: attr(),
  value: attr(),
  product: fk('Product', 'product_properties')
};

export default ProductProperty;
