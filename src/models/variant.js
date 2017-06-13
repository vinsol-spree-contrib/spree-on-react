import {fk, many, attr, Model} from 'redux-orm';

class Variant extends Model {
  toString() {
    return `Variant #${ this.id }`;
  };
};

Variant.modelName = "Variant";
Variant.fields = {
  id: attr(),
  name: attr(),
  images: many('Image', 'variant'),
  product: fk('Product', 'variants')
};

export default Variant;
