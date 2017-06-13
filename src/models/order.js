import {fk, many, attr, Model} from 'redux-orm';

class Order extends Model {
  toString() {
    return `Order #${ this.number }`;
  };
};

Order.modelName = "Order";
Order.fields = {
  id: attr(),
  number: attr()
};
