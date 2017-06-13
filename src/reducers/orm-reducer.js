// ORM Reducer
import APP_ACTIONS from '../constants/app-actions';
// import ProductModel from '../services/product-model';
import session from '../models';

const initialState = {
  products: []
};

const ormReducer = function(state = initialState, action) {
  // These variable are used as local variables in switch case.
  let thisProduct, thisVariant, thisImage;
  const { Product, ProductProperty, Variant, Image } = session;
  // debugger
  // let products, images, variants, product_properties;

  switch (action.type) {
    // case APP_ACTIONS.ADD_PRODUCTS:
    //   let { images, products, variants, product_properties } = action.payload;
    //   products.forEach((product, index) => {
    //     const this_product = Product.create(product);
    //   });

    //   product_properties.forEach((product_property, index) => {
    //     ProductProperty.create(product_property)
    //   });

    //   // Create Products
    //   // Create Variants
    //   // Create ProductProperties
    //   // Create images
    //   // Product.create({});
    //   break;
    // case APP_ACTIONS.ADD_PROPERTY_TO_PRODUCT:
    //   Product.withId(action.payload.product_property.product_id).product_properties.add(action.payload.product_property);
    //   break;
    // { payload: { product: {} } }
    case APP_ACTIONS.ADD_PRODUCT:
      // debugger
      Product.create(action.payload.product);
      break;

    // { payload: { product_properties: [], product_id } }
    case APP_ACTIONS.ADD_PROPERTIES_TO_PRODUCT:
      thisProduct = Product.withId(action.payload.product_id)

      action.payload.product_properties.forEach((product_property) => {
        let property = ProductProperty.create(product_property);
        property.product = thisProduct;
      });
      break;

    // { payload: { variants: [], product_id } }
    case APP_ACTIONS.ADD_VARIANTS_TO_PRODUCT:
      thisProduct = Product.withId(action.payload.product_id);

      action.payload.variants.forEach((variant) => {
        thisVariant = Variant.create(variant);

        if (thisVariant.is_master) {
          thisProduct.master = thisVariant;
        }
        thisVariant.product = thisProduct;
      });
      break;

    // { payload: { images: [], variant_id } }
    case APP_ACTIONS.ADD_IMAGES_TO_VARIANT:
      thisVariant = Variant.withId(action.payload.variant_id);
      action.payload.images.forEach((image) => {
        thisImage = Image.create(image);
        thisVariant.images.add(thisImage);
      });
      break;

    default:
      break;
  }

  return session.state;
}

export default ormReducer;
