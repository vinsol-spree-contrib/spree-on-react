import { ORM } from 'redux-orm';
import Product from './product';
import Image from './image';
import Variant from './variant';
import ProductProperty from './product_property';

const orm = new ORM();

// Register the models
orm.register(Product, Image, ProductProperty, Variant);

// This is the raw ORM object consumed by ./index.js. Shouldn't be required
// elsewhere.
export default orm;
