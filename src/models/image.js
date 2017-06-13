import {fk, many, attr, Model} from 'redux-orm';

class Image extends Model {
  toString() {
    return `Image #${ this.id }`;
  };
};

Image.modelName = "Image";
Image.fields = {
  id: attr(),
  name: attr(),
  product: fk('Product')
};

export default Image;
