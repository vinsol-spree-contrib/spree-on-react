import {fk, many, attr, Model} from 'redux-orm';
// import Image from './image';

class Product extends Model {
  toString() {
    return `Product #${ this.name }`;
  };
};

Product.modelName = "Product";
Product.fields = {
  id: attr(),
  name: attr(),
  master: fk('Variant')
  //product_properties: many({to: 'ProductProperty', relatedName: 'product'})
};

export default Product;
